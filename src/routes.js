import App from './app.vue'
import About from './components/about/about.vue'
import User from './components/user/user.vue'
import Counter from './components/conuter/counter.vue'

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/about',
                name: 'about',
                component: About,
            },
            {
                path: '/user/:userName',
                name: 'user',
                component: User
            },
            {
                path: '/counter',
                name: 'counter',
                component: Counter
            }
        ]
    }
]
