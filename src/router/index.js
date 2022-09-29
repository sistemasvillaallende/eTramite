/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/Landing',
        name: 'Landing/',
        component: () =>
            import ( /* webpackChunkName: "Home" */ '../views/Landing.vue'),

    }, 
    {
        path: '/NvoTramite',
        name: 'NvoTramite/',
        component: () =>
            import ( /* webpackChunkName: "Home" */ '../views/NvoTramite'),

    },   
     {
        path: '/',
        name: 'Login/',
        component: () =>
            import ( /* webpackChunkName: "EditBadec" */ '../views/Login.vue'),

    },

    {
        path: '/_Layout/',
        name: '_Layout/',
        component: () =>
            import ( /* webpackChunkName: "EditBadec" */ '../views/_Layout.vue'),

    },
    {
        path: '/tramite/',
        name: 'tramite/',
        component: () =>
            import ( /* webpackChunkName: "EditBadec" */ '../views/tramite.vue'),

    },
    {
        path: '/DetailTramite/',
        name: 'DetailTramite/',
        component: () =>
            import ( /* webpackChunkName: "EditBadec" */ '../views/DetailTramite.vue'),

    },
    {
        path: '/prueba/',
        name: 'prueba/',
        component: () =>
            import ( /* webpackChunkName: "EditBadec" */ '../views/prueba.vue'),

    },


]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,

    routes
})
export default router