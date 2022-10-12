<script setup>
    import { site_info,lang, title } from '/src/variables.js'
    import { goto } from '/src/func-common.js'
</script>

<template>
    <div class="content whatwedo py-5" :class="lang">
        <div class="container py-3">
            <h1 class="content-title"> {{ title.whatwedo[lang] }} </h1>
            <!-- <h4 v-if="lang=='jp'" class="content-subtitle" >What we do</h4> -->
            <div class="line"></div>
            <div class="inner-content row py-3">
                <div class="col-12 col-md-6 image pb-3 pb-md-0">
                    <img src="/src/assets/images/whatwedo/wwd-sample.jpg" alt="">
                </div>
                <div class="col-12 col-md-6 text">
                    <span class="setsumei mb-2" v-html="site_info.whatwedo.title[lang]">
                    </span>
                    <div class="support py-3">
                        <span class="d-block mb-3">
                            {{site_info.whatwedo.categories.title[lang]}}
                        </span>
                        <ul class="mb-0">
                            <li v-for="(cat,index) in site_info.whatwedo.categories.contents" :key="index">{{cat[lang]}}</li>
                        </ul>
                    </div>
                    <span class="my-btn goto-detail" @click="goto('whatwedo')">{{ site_info.detail_btn_label[lang] }}</span>
                </div>
            </div>
        </div>
    </div>
</template>