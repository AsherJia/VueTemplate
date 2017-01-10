import App from './app.vue'
import About from './components/about/about.vue'
import User from './components/user/user.vue'
import About1 from './components/about/about1.vue'
import About2 from './components/about/about2.vue'
import About3 from './components/about/about3.vue'

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/about',
                name: 'about',
                components: {
                    default: About,
                    header: About1,
                    bottom: About2
                },
                redirect: {
                    name: 'user'
                },
                children: [
                    {
                        path: 'about3',
                        name: 'about3',
                        component: About3
                    }
                ]
            },
            {
                path: '/user/:userName',
                name: 'user',
                component: User
            }
        ]
    }
]
