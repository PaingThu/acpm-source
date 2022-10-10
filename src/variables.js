
import {ref} from 'vue'

import logo from './assets/images/logo.png'
import jp_icon from './assets/images/country/jp.svg'
import mm_icon from './assets/images/country/mm.svg'
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

    q_link:"https://forms.gle/hLAwACi5d4LZGgSSA",

    detail_btn_label: { jp: '詳しくはこちら >', mm: 'အသေးစိတ်ဖတ်ရန် >' },

    about:{
        jp:`ミャンマーでの平和の実現を願い、在日ミャンマー人と日本人有志で「ミャンマーの平和を創る会(チィチィキンキン)」を立ち上げました。
        2021年2月の軍によるクーデター以降、ミャンマーの状況は深刻さを増しています。
        2021年2月の軍によるクーデター以降、ミャンマーの状況は深刻さを増しています。
        そこで私たちは、日本で暮らすミャンマーの若者の夢実現と、ミャンマー社会の平和と安寧の回復を目指す活動を通じて、ミャンマーの未来を作っていきたいという思いから、自分たちのできることに取り組もうと決心しました。
        ※「チィチィキンキン」とは、ミャンマー語で「仲良し」という意味です。「争いや闘うことなく、皆で仲良く平和な社会を創っていきましょう。そのため私たちも出来ることを精一杯頑張りたい！」という思いを込めて、団体名を選びました。
        `,
        mm:`မြန်မာနိုင်ငံမှာ ငြိမ်းချမ်းရေး ဖော်ဆောင်နိုင်ဖို့ မျှော်လင့်နေတဲ့ ဂျပန်နိုင်ငံမှာ နေထိုင်တဲ့ မြန်မာတွေနဲ့ ဂျပန်စေတနာ့ဝန်ထမ်း "မြန်မာငြိမ်းချမ်းရေး ဖန်တီးရေးအဖွဲ့ (ချစ်ချစ်ခင်ခင်)" ကို ထူထောင်ခဲ့ပါတယ်။ 2021 ခုနှစ် ဖေဖော်ဝါရီလတွင် စစ်တပ်က အာဏာသိမ်းပြီးနောက်ပိုင်း မြန်မာနိုင်ငံအခြေအနေသည် ပိုမိုဆိုးရွားလာခဲ့သည်။ 2021 ခုနှစ် ဖေဖော်ဝါရီလတွင် စစ်တပ်က အာဏာသိမ်းပြီးနောက်ပိုင်း မြန်မာနိုင်ငံအခြေအနေသည် ပိုမိုဆိုးရွားလာခဲ့သည်။ ထို့ကြောင့် ဂျပန်နိုင်ငံတွင်နေထိုင်သော မြန်မာလူငယ်များ၏ အိပ်မက်များကို အကောင်အထည်ဖော်ရန်နှင့် မြန်မာ့လူ့အဖွဲ့အစည်းအတွင်း ငြိမ်းချမ်းရေးနှင့် လုံခြုံမှုများ ပြန်လည်ရရှိရေးတို့ကို ရည်ရွယ်၍ မြန်မာနိုင်ငံ၏ အနာဂတ်ကို ဖန်တီးလိုသည့် ဆန္ဒဖြင့် မည်ကဲ့သို့ လုပ်နိုင်သည်များကို လုပ်ဆောင်ရန် ဆုံးဖြတ်ခဲ့သည်။ * "ချစ်ချစ်ခင်ခင်" ဆိုသည်မှာ မြန်မာလို "မိတ်ဆွေကောင်း" ဟုဆိုသည်။ "အားလုံးပူးပေါင်းပြီး ရန်ဖြစ်ခြင်းမရှိဘဲ ငြိမ်းချမ်းသောလူ့အဖွဲ့အစည်းကို ဖန်တီးကြပါစို့။ ထို့အတွက်ကြောင့် ကျွန်ုပ်တို့လည်း အစွမ်းကုန်လုပ်ဆောင်လိုပါသည်။`,
    },
    whatwedo:{
        title:{
            jp: `当団体として以下の3つのことを柱に活動していきます。`,
            mm: `အဖွဲ့အစည်းတစ်ခုအနေဖြင့် ကျွန်ုပ်တို့သည် အောက်ပါမဏ္ဍိုင်သုံးရပ်ကို အာရုံစိုက်သွားမည်ဖြစ်ပါသည်။`
        },
        categories: {
            title: { jp:"当面の取り組み",mm:"ချက်ခြင်းအားထုတ်မှု"},
            contents: [
                {
                    jp: "留学生/実習生支援",
                    mm: "နိုင်ငံတကာ ကျောင်းသား/အလုပ်သင် ကျောင်းသား ပံ့ပိုးမှု",
                },
                {
                    jp: "人道支援",
                    mm: "လူသားချင်းစာနာမှုအကူအညီ",
                },
                {
                    jp: "ミャンマー支援の和を広げる啓蒙活動",
                    mm: "ဉာဏ်အလင်း ပြန့်ပွားရေး လှုပ်ရှားမှုများကို မြန်မာတို့၏ သဟဇာတဖြစ်အောင် ပံ့ပိုးကူညီခြင်း။",
                },
            ],
        }
        
    }

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
  </svg>`,
    jp: jp_icon,
    mm: mm_icon,
  
}