import { createStore } from 'vuex'

import UserAuthStore from '../user/auth/store/UserAuthStore'



const UserStore = createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        UserAuthStore: UserAuthStore,
    },

})

export default UserStore