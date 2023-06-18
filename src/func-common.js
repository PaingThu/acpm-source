import { reactive } from 'vue'
import router from './router.js'
import {root} from './variables.js'
import { events } from '/src/event.json'
import axios from "axios"

const sheets = reactive({
    list:[]
})
export const eventInfo = reactive({
    all:[],
    new:[],
    old:[]
})

export const cckkValueApi = axios.create({
    baseURL: `https://sheets.googleapis.com/v4/spreadsheets/1NoGOkzKQ0Ui4hcq26tEIXB1zZurYuTaJQsnSQCgPh7E/values/`,
    params: {key:"AIzaSyBuoa3iAy6JtfpBUpcqL4k1gsrMT631TPw"}
})
export const cckkSheetApi = axios.create({
    baseURL: `https://sheets.googleapis.com/v4/spreadsheets/1NoGOkzKQ0Ui4hcq26tEIXB1zZurYuTaJQsnSQCgPh7E/`,
    params: { 
        key:"AIzaSyBuoa3iAy6JtfpBUpcqL4k1gsrMT631TPw",
        fields: "sheets.properties.title"
    }
})

export const getSheets =async () => {
    const tmpEvent = []
    const retData = await cckkValueApi.get('activity!A1:AB1000')
        var key = []
        retData.data.values.map((val,index)=>{
            if(index == 0){
                key = val
            }else{
                var tmp = {}
                val.map((v,i)=>{
                    tmp[key[i]]=v
                })
                tmpEvent.push(tmp)
            }
        })
    eventInfo.all = tmpEvent.reverse()
    const today = new Date().getTime()
    eventInfo.new = tmpEvent.filter(e => new Date(e.date).getTime() > today)
    eventInfo.old = tmpEvent.filter(e => new Date(e.date).getTime() < today)
    console.log("Old  ", eventInfo.old)
}
// export const getSheets =async () => {
//     const tmpEvent = []
//     const retData = await cckkSheetApi.get()
//     for (const e of retData.data.sheets) {
//         sheets.list.push(e.properties.title) 
//         const retValue = await cckkValueApi.get(`${e.properties.title}!A1:AB1000`)
//         var key = []
//         retValue.data.values.map((val,index)=>{
//             if(index == 0){
//                 key = val
//             }else{
//                 var tmp = {}
//                 val.map((v,i)=>{
//                     tmp[key[i]]=v
//                 })
//                 tmpEvent.push(tmp)
//             }
//         })
//     }
//     eventInfo.all = tmpEvent.reverse()
//     const today = new Date().getTime()
//     eventInfo.new = tmpEvent.filter(e => new Date(e.date).getTime() > today)
//     eventInfo.old = tmpEvent.filter(e => new Date(e.date).getTime() < today)
//     console.log("New  ", eventInfo.new)
// }


export const goto = (page) => {
    console.log("goto ", page)
    router.push(`${root}/${page}`)
}

export const gotoTop = () => {
    let element = document.getElementById('app')
    element.scrollIntoView(); 
}

export const getEvents = async (status,numOfItems=0) => {
    // const today = new Date().getTime()
    // console.log("date ", today)
    // if(status == "new"){
    //     const eve = events.filter(e => new Date(e.date).getTime() > today)
    //     return numOfItems ? eve.reverse().slice(0,numOfItems) : eve.reverse()
    // }
    // if(status == "old"){
    //     const eve = events.filter(e => (e.date=="" || new Date(e.date).getTime() < today))
    //     return numOfItems ? eve.reverse().slice(0,numOfItems) : eve.reverse()
    // }
    // await cckkApi.get()
   
    return []
}