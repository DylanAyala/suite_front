import Login from './auth/pages/Login.vue'
import Register from './register/pages/Register.vue'
import RegisterSuccess from "./register/pages/RegisterSuccess.vue"
import Activation from "./register/pages/Activation.vue"
import UserProfile from "./profile/pages/UserProfile.vue"

export const userRoutes = [
    {
        name: "login",
        path: '/login',
        component: Login

    },
    {
        name: "register",
        path: '/register',
        component: Register
    },
    {
        name: "register-success",
        path: '/register-success',
        component: RegisterSuccess
    },
    {
        name: "activationUser",
        path: '/activation-user/:token',
        component: Activation,
        meta: {
            requiresAuth: false
        }
    },
    {
        name: "UserProfile",
        path: '/user-profile',
        component: UserProfile,
        meta: {
            requiresAuth: true
        }
    },
]