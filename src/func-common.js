import router from './router.js'

export const goto = (page) => {
    console.log("goto ", page)
    // location.href = page
    router.push(page)
}