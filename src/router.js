import { createRouter, createWebHistory } from 'vue-router'
import { root, site_info } from './variables'

import ActivityDetailPage from './pages/ActivityDetailPage.vue'
import ActivityPage from './pages/ActivityPage.vue'
import CurrentActivitiesPage from './pages/CurrentActivitiesPage.vue'
import AboutPage from './pages/AboutPage.vue'
import ContactPage from './pages/ContactPage.vue'
import HomePage from './pages/HomePage.vue'
import WhatWeDoPage from './pages/WhatWeDoPage.vue'

const routes = [
    { path: `${root}/activities`, name: ["activity","activities"], component: ActivityPage },
    { path: `${root}/activities/:id`, name: ["activity","activities"], component: ActivityDetailPage },
    { path: `${root}/current-activities`, name: ["activity","current-activities"], component: CurrentActivitiesPage },
    { path: `${root}/about-us`, name: ["about-us"], component: AboutPage },
    { path: `${root}/contact`, name: ["contact"], component: ContactPage },
    { path: `${root}/whatwedo`, name: ["whatwedo"], component: WhatWeDoPage },
    { path: `${root}`, name: [""], component: HomePage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    // scrollBehavior(to, from, savedPosition) {
    //     return { top: 0 }
    // },

})
router.beforeEach((to, from) => {
    site_info.from = from.path
  })



export default router