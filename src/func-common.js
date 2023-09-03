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
    const sheetName = "activity-testing-db"
    if(window.location.host == "chitchitkhinkhin.org"){
        sheetName = "activity"
    }
    const retData = await cckkValueApi.get(`${sheetName}!A1:AB1000`)
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
}

export const goto = (page) => {
    router.push(`${root}/${page}`)
}

export const gotoTop = () => {
    let element = document.getElementById('app')
    element.scrollIntoView(); 
}

export const urlify = (text) => {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
        return `<a href="${url}" target="_blank">${url}</a>`;
    })
}