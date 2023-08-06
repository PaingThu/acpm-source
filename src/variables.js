
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
const key = "AIzaSyB63Gelp7S2Kkfc_0f0mfXg1XmlkeZCHpM"
export const title = {
    "home": {
        jp:"活動紹介", en: "Home", mm: "မူလစာမျက်နှာ"
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
    "request-for-support": {
        jp:"支援のお願い", en: "Request For Support", mm: ""
    },
    "media-publication": {
        jp:"Media掲載", en: "Media Publication", mm: ""
    },
    "contact": {
        jp:"お問合せ", en: "Contact", mm: "ဆက်သွယ်ရန်", 
    }
}
export const site_info = {
    name: {
        jp: "ミャンマーの平和を創る会",
        en: "Chit Chit Khin Khin (CCKK)",
        mm: "ချစ်ချစ်ခင်ခင်"
    },
    short_name:"Chit Chit Khin Khin",
    logo: logo,
    navList: [
        { page:"" },
        {  page:"about-us" },
        { page:"whatwedo" },
        { page:"media-publication" },
        { page:"request-for-support" },
        { page:"contact" },
    ],
    banner_list: [
        {id:"bn-01", image: banner_1},
    ],
    mail: "kagayakumirai0813@gmail.com",
    phone: "090-2015-4704",
    fb_page: "https://www.facebook.com/profile.php?id=100086267839747",
    twitter: "https://twitter.com/Chitkhin2023",
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
        
    },
    greeting : {
        title: {
            jp: '団体挨拶',
            mm: ''
        },
        speech:{
            jp:`　　　ミャンマーは、自然豊かな国です。
            肥沃で広大な、そして天然資源に恵まれた国土に5000万人以上の人々がゆったりと暮らしています。
            しかし、長年にわたる不安定な政治情勢によって社会の発展は遅れ、多くの深刻な問題を抱える国になってしまいました。国民が豊かさを享受できず、自分たちの望む政治体制を実現できないのが現状です。こういった苦境の中、ミャンマーの人々は自分たちの状況を改善し、よりよい未来を実現するために努力し、闘い、そして血を流しています。<br>
            　　　明るい未来に向けたミャンマーの人々の苦悩、願い、叫びは私たちの心に強く響いています。そして、ミャンマーの明るい未来のために、私たちはささやかながらも彼らの手助けをしようと決意し、「ミャンマーの未来を創る会」を設立しました。<br>
            　　　ミャンマー国内で避難生活を余儀なくされている、あるいは過酷な貧困状態に置かれている市民を直接支援する。日本にやって来た留学生や技能実習生の問題解決やエンパワーメントのお手伝いをする。そして、日本社会にミャンマーの状況をもっと知ってもらうための広報、教育の機会を設ける。<br>
            　　　私たちのできることは些細なことかもしれませんが、やるべきことは膨大です。ミャンマーに明るい未来がもたらされるよう、自分たちの力と知恵を精一杯振り絞りながら、そして私たちと同じ気持ちを持つ仲間と協力しながら、一歩一歩進んでいきたいと思います。<br>
            
            　　　ミャンマーで苦しんでいる人々の（命と未来の繋げる）ために、皆様のお力をお貸しください。`,
            mm:""
        }
    },
    newEvents: {
        jp: "今後のイベント",
        eng: "Coming Events",
        mm: "လာမဲ့ အစီအစဥ်များ"
    },
    oldEvents: {
        jp: "活動一覧",
        eng: "Old Events",
        mm: "ပြီးသွားခဲ့သည့် အစီအစဥ်များ"
    },
    from:""

}

import kumazawa from '/src/assets/images/members/kumazawa.jpg'
import kameyama from '/src/assets/images/members/kameyama.jpg'
import ishikawa from '/src/assets/images/members/ishikawa.jpg'
import eiminthuthu from '/src/assets/images/members/eiminthuthu.jpg'
import otsuki from '/src/assets/images/members/otsuki.jpg'

export const member_info = [
    {
        id: "mb-001", 
        img: kumazawa, 
        name: {
            jp:"熊澤 新",
            mm:""
        },
        remark: {
            jp: "行政書士",
            mm: ""
        },
        speech:{
            jp:"ミャンマー民主化のためのネットワーク」代表。1999年以来、在日ミャンマー人たちと民主 化のための活動に従事。2021年のクーデタ以降 も、ミャンマー人の活動をお手伝いしたく、 一生懸命やっています。東京都内で行政書士を開業。",
            mm:""
        }
    },
    {
        id: "mb-002", 
        img: kameyama, 
        name: {
            jp:"亀山 仁",
            mm:""
        },
        remark: {
            jp: "写真家",
            mm: ""
        },
        speech:{
            jp:"東京都生まれ。写真家。一般社 団法人 ミャンマー祭り理事、日本写真協 会会員。2005年からミャンマーの人々や そ の 暮らしを テ ー マ にした 写 真 数 発表。写真集に『Myanmar2005-2017』 (冬青社)、日本図書館協会推薦図書の 『Thanaka』(同)がある。また、『ミャンマ ーの人々と戦禍の記憶』(ポートレートギ ャラリー、20月)など、写真展も多数開催している。",
            mm:""
        }
    },
    {
        id: "mb-003", 
        img: ishikawa, 
        name: {
            jp:"石川 航",
            mm:""
        },
        remark: {
            jp: "東京外国語大学院生",
            mm: ""
        },
        speech:{
            jp:"東京外国語大学大学院修士課程在籍。在日ミャンマー人と立ち上げた有志グループ「日本ミャンマーMIRAI創造会」日本側代表。街頭での募金活動やクラウドファンディング運営チームへの参加といった人道支援や、政府への要請活動などを行ってきた。運営メンバーとして関わっている「Yangonかるた」のイベントなどを通じて、ミャンマーの文化を発信する活動も実施中。",
            mm:""
        }
    },
    {
        id: "mb-006", 
        img: eiminthuthu, 
        name: {
            jp:"Ei Min Thu Thu",
            mm:""
        },
        remark: {
            jp: "在日ミャンマー人",
            mm: ""
        },
        speech:{
            jp:"2015年に来日。現在は通信企業勤務。クーデター後、現地支援に力を入れている。これからも団体のメンバー一員として協力する。",
            mm:""
        }
    },
    {
        id: "mb-007", 
        img: otsuki, 
        name: {
            jp:"大槻 美咲",
            mm:""
        },
        remark: {
            jp: "在日ミャンマー人",
            mm: ""
        },
        speech:{
            jp:"2003年に留学のため来日。2007年京都産業大学経営学部経営学科を卒業後、国内流通企業勤務。ラオス・ミャンマー・カンボジア・ベトナム・中国など海外CSR活動に従事。その後、通信企業勤務。ミャンマー事業を担当。現在はミャンマーの平和を創る会の共同代表を務める。クーデター後、日本人とミャンマー人の仲間とともにクラウドファンディングを2度実施。避難民、公務員、医療従事者支援を行った。今後も人道支援に力を入れる。",
            mm:""
        }
    },
]



export const colors = {
    primary: "#01abe9",
    secondary: "#cbf1ff",
}

export const icons = {
    mail: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
    </svg>`,
    phone: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
    </svg>`,
    facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
    </svg>`,
    twitter: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
    <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
    </svg>`,
    up_arrow_circle_fill: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
  </svg>`,
    jp: jp_icon,
    mm: mm_icon,
    back: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
  </svg>`
  
}