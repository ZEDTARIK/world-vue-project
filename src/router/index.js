import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import CreateEvent from '../views/CreateEvent.vue'
import EventDetail from '../components/EventDetail.vue'
import ErrorDispaly from '../views/ErrorDisplay.vue'

const routes = [{
        path: '/',
        name: 'EventList',
        component: EventList
    },
    {
        path: '/event/:id',
        name: 'EventDetail',
        props: true,
        component: EventDetail
    },
    {
        path: '/event/add',
        name: 'CreateEvent',
        component: CreateEvent
    },
    {
        path: '/error/:error',
        name: 'ErrorDisplay',
        props: true,
        component: ErrorDispaly
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router