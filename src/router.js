import { createRouter, createWebHistory } from 'vue-router'
import { root } from './variables'

import ActivityPage from './pages/ActivityPage.vue'
import AboutPage from './pages/AboutPage.vue'
import ContactPage from './pages/ContactPage.vue'
import HomePage from './pages/HomePage.vue'
import WhatWeDoPage from './pages/WhatWeDoPage.vue'

const routes = [
    { path: `/${root}/activity`, name: "activity", component: ActivityPage },
    { path: `/${root}/about-us`, name: "about-us", component: AboutPage },
    { path: `/${root}/contact`, name: "contact", component: ContactPage },
    { path: `/${root}/whatwedo`, name: "whatwedo", component: WhatWeDoPage },
    { path: `/${root}`, name: "", component: HomePage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})



export default router