<script setup>

    import { site_info,lang, title } from '/src/variables.js'
    import { goto, getEvents } from '/src/func-common.js'
    // import ImageContainer from '/src/containers/ImageContainer.vue'

    const newEvents = getEvents("new",4)
    const oldEvents = getEvents("old")
    console.log("Events ", newEvents)

    // import activity1 from '/src/assets/images/activities/act1.png'
    // import activity2 from '/src/assets/images/activities/act2.jpeg'
    // import activity3 from '/src/assets/images/activities/act3.jpeg'
    // import activity4 from '/src/assets/images/activities/act4.jpeg'
    // import activity5 from '/src/assets/images/activities/act5.jpg'
    // import activity6 from '/src/assets/images/activities/act6.jpg'
    // import activity7 from '/src/assets/images/activities/act7.jpg'
    // import activity8 from '/src/assets/images/activities/act8.jpg'
    // import activity9 from '/src/assets/images/activities/act9.jpg'

    // const activity_list = [
    //     { 
    //         image:activity1, 
    //         label:{
    //             jp:"在日ミャンマー留学生や技能実習生の支援に向けた一次調査",
    //             mm:"ဂျပန်နိုင်ငံရှိ မြန်မာနိုင်ငံမှ နိုင်ငံတကာ ကျောင်းသားများနှင့် နည်းပညာဆိုင်ရာ အလုပ်သင်များအား ကူညီပံ့ပိုးပေးရန်အတွက် အခြေခံစစ်တမ်း",
    //         },
    //         link: "https://facebook.com/story.php?story_fbid=pfbid028MHsrg1XA7RLLqHDyeyCAUZXgUCnNKLWEEmXnoBer3TbLP5rRCEu1hiXu5wsn1Pel&id=100086267839747&sfnsn=mo"
    //     },
    //     { 
    //         image:activity2, 
    //         label:{
    //             jp:`【避難民支援の寄付品の募集】`,
    //             mm:""
    //         },
    //         link: "https://www.facebook.com/permalink.php?story_fbid=pfbid02NZq1U3u4Bw6QQXadi2KvnVSHnDFf3cumMr3ejNYZhC81G8bJ7f1SzKyu5N2gFAtTl&id=100086267839747"
    //     },
    //     { 
    //         image:activity3, 
    //         label:{
    //             jp:`【11/26 ミャンマー留学生/実習生 無料相談ブース出展のお知らせ】※拡散希望`,
    //             mm:""
    //         },
    //         link: "https://www.facebook.com/permalink.php?story_fbid=126524210233173&id=100086267839747"
    //     },
    //     { 
    //         image:activity4, 
    //         label:{
    //             jp:`「ミャンマー多民族祭り」出展のご案内`, 
    //             mm:""
    //         },
    //         link: "https://www.facebook.com/permalink.php?story_fbid=pfbid07hqaoy56Po4PJSjKxpKcmwf5C9LDJN3MUfbShHtnGWRhsJDHgMCZDqFeh3wEEa4Hl&id=100086267839747"
    //     },
    //     { 
    //         image:activity5, 
    //         label:{
    //             jp:`避難所への支援`, 
    //             mm:""
    //         },
    //         link: "https://m.facebook.com/story.php?story_fbid=pfbid025mAVvEG4rUETdKPMiPGtxrTVYy6uCx5fd54ZBkKRqePgRchkRe6W9XBPB6SWhwwtl&id=100086267839747"
    //     },
    //     { 
    //         image:activity6, 
    //         label:{
    //             jp:`ミャンマー写真展`, 
    //             mm:""
    //         },
    //         link: "https://m.facebook.com/story.php?story_fbid=pfbid0HdjaY389pBM9sd1u6gsbocyAExJaFSXMu72AC52xazdTPT7VFfefQwaUYNFjXC9Ql&id=100086267839747"
    //     },
    //     { 
    //         image:activity7, 
    //         label:{
    //             jp:`衣類を寄付してくださった皆様、ありがとうございました！`, 
    //             mm:""
    //         },
    //         link: "https://m.facebook.com/story.php?story_fbid=pfbid0CoPisniggw74XV9SifsSgZL2VQanf8QHAg74Da1vpXUgzK3tdMcBkyYLNpeKtXWnl&id=100086267839747"
    //     },
    //     { 
    //         image:activity8, 
    //         label:{
    //             jp:`【メディア関係者各位】`, 
    //             mm:""
    //         },
    //         link: "https://m.facebook.com/story.php?story_fbid=pfbid02v5PXutqpvaGMYW8f9r67P4niDHpERorEZ2EvNgaMdeydS4owGyGUM122NQLNnsjTl&id=100086267839747&sfnsn=mo"
    //     },
    //     { 
    //         image:activity9, 
    //         label:{
    //             jp:`当会とSRRのコラボ`, 
    //             mm:""
    //         },
    //         link: "https://m.facebook.com/story.php?story_fbid=pfbid02NJvKQgTWwkSfvhTgLSGNqNTuCrHoTqQe9tsyp4WnJGFxS1LgYJh1Qm9yCiSYttxxl&id=100086267839747"
    //     },
    // ]

</script>

<template>
    <div class="content current-activities py-3">
        <div class="container py-3">
            <div v-if="newEvents.length" class="inner-content p-3 border-bottom">
                <h4 class="content-title text-center" :class="lang"> {{site_info.newEvents[lang]}} </h4>
                <div class="row justify-content-center">
                    <template v-for="(event, eindex) in newEvents" :key="eindex">
                        <div class="each-new-event col-12 col-md-3">
                            <div class="banner d-flex align-items-center shadow">
                                <img :src="`/src/assets/images/activities/${event.image}.jpg`" alt="" class="w-100">
                            </div>
                            <div class="py-3 d-flex flex-column gap-1">
                                <span>{{ event.title[lang] }}</span>
                                <span>{{ event.date }}</span>
                                <a class="ms-auto text-black" :href="event.link"><small>詳細はこちら ></small></a>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <div class="inner-content p-3">
                <h4 class="content-title text-center py-3" :class="lang"> {{site_info.oldEvents[lang]}} </h4>
                <div class="old-events">
                    <template v-for="(event, eindex) in oldEvents" :key="eindex">
                        <div class="each-old-event w-100 border-bottom pb-3">
                            <div class="banner d-flex align-items-center shadow">
                                <img :src="`/src/assets/images/activities/${event.image}.jpg`" alt="" class="w-100">
                            </div>
                            <div class="info d-flex flex-column gap-2 py-2">
                                <span>{{ event.title[lang] }}</span>
                                <span>{{ event.date }}</span>
                                <a class="ms-auto text-black" :href="event.link"><small>詳細はこちら ></small></a>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        
    </div>
</template>