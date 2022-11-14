<script setup>

    import axios from 'axios'

    import { site_info,lang, title } from '/src/variables.js'
    import { goto } from '/src/func-common.js'
    import ImageContainer from '/src/containers/ImageContainer.vue'

    import activity1 from '/src/assets/images/activities/act1.png'
    import activity2 from '/src/assets/images/activities/act2.jpeg'
    import activity3 from '/src/assets/images/activities/act3.jpeg'

    const fbPost = axios.get("https://graph.facebook.com/v15.0/100086267839747/posts")
    console.log("FB post ",fbPost)

    const activity_list = [
        { 
            image:activity3, 
            label:{
                jp:`【【11/26 ミャンマー留学生/実習生 無料相談ブース出展のお知らせ】※拡散希望`,
                mm:""
            },
            link: "https://www.facebook.com/permalink.php?story_fbid=126524210233173&id=100086267839747"
        },
        { 
            image:activity2, 
            label:{
                jp:`【避難民支援の寄付品の募集】`,
                mm:""
            },
            link: "https://www.facebook.com/permalink.php?story_fbid=pfbid02NZq1U3u4Bw6QQXadi2KvnVSHnDFf3cumMr3ejNYZhC81G8bJ7f1SzKyu5N2gFAtTl&id=100086267839747"
        },
        { 
            image:activity1, 
            label:{
                jp:"在日ミャンマー留学生や技能実習生の支援に向けた一次調査",
                mm:"ဂျပန်နိုင်ငံရှိ မြန်မာနိုင်ငံမှ နိုင်ငံတကာ ကျောင်းသားများနှင့် နည်းပညာဆိုင်ရာ အလုပ်သင်များအား ကူညီပံ့ပိုးပေးရန်အတွက် အခြေခံစစ်တမ်း",
            },
            link: "https://facebook.com/story.php?story_fbid=pfbid028MHsrg1XA7RLLqHDyeyCAUZXgUCnNKLWEEmXnoBer3TbLP5rRCEu1hiXu5wsn1Pel&id=100086267839747&sfnsn=mo"
        },
       
        
    ]

</script>

<template>
    <div class="content current-activities py-3">
        <div class="container py-3">
            <div class="inner-content p-3 ">
                <h1 class="content-title text-center" :class="lang"> {{title['current-activities'][lang]}} </h1>
                <div class="row act-images py-3">
                    <a :href="activity.link" class="col-12 col-md-4 rounded" v-for="(activity,index) in activity_list" :key="index" target="_blank">
                        <ImageContainer :img_info="{image:activity.image,label:activity.label[lang]}" />
                    </a>
                </div>
            </div>
        </div>
        
    </div>
</template>