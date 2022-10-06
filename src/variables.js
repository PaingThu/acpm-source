
import {ref} from 'vue'

import logo from './assets/images/logo.png'
import banner_1 from '/src/assets/images/banner/banner_1.jpg'

// export const root = "/acpm"

export const yPosition = ref(0)

export const root = ""

export const current_ln = ref("jp_label")

export const lang = ref("jp")

export const toTopLabel = {
    jp:"トップに戻る", en:"Go Top Top", mm:"အပေါ်သို့"
}
export const questionnaire = {
    jp:"アンケートお願い致します！", en:"Questionnaire Please!", mm:"ကျေးဇူးပြုပြီး စစ်တမ်းဖြေပေးပါ"
}

export const title = {
    "home": {
        jp:"ホーム", en: "Home", mm: "မူလစာမျက်နှာ"
    },
    "about-us": {
        jp:"団体紹介", en: "About us", mm: "အဖွဲ့အစည်းမိတ်ဆက်"
    },
    "whatwedo": {
        jp:"活動方針", en: "What we do", mm: "လုပ်ဆောင်ချက်မူဝါဒ"
    },
    "activity": {
        jp:"活動", en: "Activity", mm: "လှုပ်ရှားမှုများ"
    },
    "activities": {
        jp:"活動報告", en: "Activities", mm: "အဖွဲ့အစည်း၏လှုပ်ရှားမှုများ"
    },
    "current-activities": {
        jp:"直近の活動", en: "Current & Upcoming Activities", mm: "လတ်တလောလှုပ်ရှားမှုများ"
    },
    "contact": {
        jp:"お問合せ", en: "Contact", mm: "ဆက်သွယ်ရန်", 
    }
}
export const site_info = {
    name: {
        jp: "ミャンマーの平和を創る会",
        en: "Association of Creating Peace for Myanmar (ACPM)",
        mm: "ချစ်ချစ်ခင်ခင်"
    },
    short_name:"ACPM",
    logo: logo,
    navList: [
        { page:"" },
        {  page:"about-us" },
        { page:"whatwedo" },
        { 
            page:"activity",
            subPages:[
                {page:"activities"},{page:"current-activities"}
            ] 
        },
        { page:"contact" },
    ],
    banner_list: [
        {id:"bn-01", image: banner_1},
    ],
    fb_page: "https://www.facebook.com/profile.php?id=100086267839747",

    q_link:"https://forms.gle/hLAwACi5d4LZGgSSA"

}



export const colors = {
    // primary: "#eed202",
    // secondary: "#fafad2",
    primary: "#01abe9",
    secondary: "#cbf1ff",
}

export const icons = {
    facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-facebook" viewBox="0 0 16 16">
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
    </svg>`,
    up_arrow_circle_fill: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
  </svg>`
  
}