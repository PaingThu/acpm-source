import router from './router.js'
import {root} from './variables.js'

export const goto = (page) => {
    console.log("goto ", page)
    // location.href = page
    // router.push(`/${root}/${page}`)
    router.push(`${root}/${page}`)
}