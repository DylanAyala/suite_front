import {
    SET_LOADING_USER,
    SET_TOKEN,
    SET_ME,
    SET_USER_INVALID
} from "../store/user-auth-mutation-types";
import UserProvider from "../providers/UserProviders"
import router from "../../../../router"
import jwt_decode from 'jwt-decode'
import graphqlClient from "../../../../apollo"

export default {
    state: {
        access_token: null,
        loadingUser: false,
        me: {
            id: null,
            username: null,
            firstName: null,
            group: [],
        },
        userInvalid: false

    },
    getters: {
        getToken: (state) => {
            return state.access_token
        },
        getLoadingUser: (state) => {
            return state.loadingUser
        },
        getMe: (state) => {
            return state.me
        },
        isAuth: (state) => {
            return (state.access_token) ? true : false
        },
        getUserInvalid: (state) => {
            return state.userInvalid
        }
    },
    actions: {
        login({ commit }, data) {
            commit(SET_LOADING_USER, true)
            commit(SET_TOKEN, '')
            commit(SET_USER_INVALID, false)
            UserProvider.auth(data.username, data.password).then((response) => {
                console.log("login success")
                commit(SET_TOKEN, response.data.auth.token)
                commit(SET_ME, response.data.auth.user)
                commit(SET_LOADING_USER, false)
                commit(SET_USER_INVALID, false)
                router.push('/')
            }).catch((error) => {
                console.log(error)
                commit(SET_LOADING_USER, false)
                commit(SET_USER_INVALID, true)
            })
        },
        checkAuth: ({ state, dispatch }) => {
            if (state.access_token) {
                let payload = jwt_decode(state.access_token)
                if (payload.exp) {
                    let dateNow = new Date();
                    let dateToken = new Date(payload.exp * 1000)
                    console.log(dateToken)
                    if (dateNow > dateToken) {
                        console.log("Token expire. Logout.")
                        dispatch('logout')
                    }
                }
            }
        },
        logout({ commit }) {
            commit(SET_TOKEN, '')
            commit(SET_ME, {})
            graphqlClient.resetStore()
            router.push('/login')
        }
    },
    mutations: {
        [SET_LOADING_USER](state, data) {
            state.loadingUser = data
        },
        [SET_TOKEN](state, data) {
            state.access_token = data
        },
        [SET_ME](state, data) {
            state.me = data
        },
        [SET_USER_INVALID](state, data) {
            state.userInvalid = data
        }
    }
}