<script setup>

    import { site_info,lang, title } from '/src/variables.js'
    import { goto } from '/src/func-common.js'
    import ImageContainer from '/src/containers/ImageContainer.vue'

    import activity1 from '/src/assets/images/activities/act1.png'

    const activity_list = [
        { 
            image:activity1, 
            label:{
                jp:"在日ミャンマー留学生や技能実習生の支援に向けた一次調査",
                mm:"ဂျပန်နိုင်ငံရှိ မြန်မာနိုင်ငံမှ နိုင်ငံတကာ ကျောင်းသားများနှင့် နည်းပညာဆိုင်ရာ အလုပ်သင်များအား ကူညီပံ့ပိုးပေးရန်အတွက် အခြေခံစစ်တမ်း"
            },
        },
        
    ]

</script>

<template>
    <div class="content current-activities py-3">
        <div class="container py-3">
            
            <!-- <h4 v-if="lang=='jp'" class="content-subtitle" >Activity</h4> -->
            <!-- <div class="line"></div> -->
            <div class="inner-content p-3 shadow-sm">
                <!-- <span class="setsumei">
                    ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー。<br> ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー。
                </span> -->
                <h1 class="content-title text-center" :class="lang"> {{title['current-activities'][lang]}} </h1>
                <div class="row act-images py-3">
                    <div class="col-12 col-md-4 rounded" v-for="(activity,index) in activity_list" :key="index" @click="goto('current-activities')">
                        <ImageContainer :img_info="{image:activity.image,label:activity.label[lang]}" />
                    </div>
                </div>
                <!-- <table class="each-activity" v-for="(activity,index) in activity_list" :key="index">
                    <tr>
                        <td>
                            <img class="me-3" :src=activity.image alt=""/>
                        </td>
                        <td>
                            <span class="img-label">
                                {{ activity.label[lang] }}
                            </span>
                        </td>
                        <td></td>
                    </tr>
                    
                    
                </table> -->
            </div>
        </div>
        
    </div>
</template>