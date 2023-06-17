import router from './router.js'
import {root} from './variables.js'
import { events } from '/src/event.json'

export const goto = (page) => {
    console.log("goto ", page)
    router.push(`${root}/${page}`)
}

export const gotoTop = () => {
    let element = document.getElementById('app')
    element.scrollIntoView(); 
}

export const getEvents = (status,numOfItems=0) => {
    const today = new Date().getTime()
    console.log("date ", today)
    if(status == "new"){
        const eve = events.filter(e => new Date(e.date).getTime() > today)
        return numOfItems ? eve.reverse().slice(0,numOfItems) : eve.reverse()
    }
    if(status == "old"){
        const eve = events.filter(e => (e.date=="" || new Date(e.date).getTime() < today))
        return numOfItems ? eve.reverse().slice(0,numOfItems) : eve.reverse()
    }
}