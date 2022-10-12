<script setup>
    import { icons, site_info, title, lang, yPosition, toTopLabel, questionnaire } from '/src/variables.js'
    import { goto, gotoTop } from '/src/func-common.js'
</script>

<template>
    <!-- <a v-if="yPosition > 120" :href="site_info.q_link" target="_blank" class="footer-popup questionare py-2 px-0 px-md-3 rounded">
        <img class="" :src="site_info.logo" alt="">
        <small class="p-2 rounded"> {{ questionnaire[lang] }}</small>
        
    </a> -->
    <span 
        v-if="yPosition > 250" 
        class="footer-popup to-top py-2 px-0 px-md-3 rounded-circle"
        @click="gotoTop()" 
    >
        <span class="d-block" v-html="icons.up_arrow_circle_fill"></span>
        <!-- <small>{{toTopLabel[lang]}}</small> -->
        
    </span>
    <div class="footer-menu py-3 text-muted">
        <div class="container p-3 text-center">
            <img class="footer-logo rounded-circle mb-3" :src="site_info.logo" alt="" @click="goto('')">
            <h5>{{ site_info.name[lang] }}</h5>
            <div class="sns-icons mb-3">
                <a 
                    :href="site_info.fb_page" v-html="icons.facebook"
                    class="mx-2"
                    target="_blank"
                >
                </a>
            </div>
            <div class="navs">
                <span 
                    v-for="(nav,index) in site_info.navList" 
                    :key="index" 
                    class="px-0 dropup-center dropup"
                >
                    <span v-if="!nav.subPages" @click="goto(nav.page)">
                        {{ title[nav.page?nav.page:'home'][lang] }}
                    </span>
                    <span 
                        v-if="nav.subPages"
                        data-bs-toggle="dropdown"
                        class="dropdown-toggle"
                    >
                        {{ title[nav.page?nav.page:'home'][lang] }}
                    </span>
                    <ul v-if="nav.subPages" class="dropdown-menu">
                        <li 
                            v-for="(sub,sindex) in nav.subPages" :key="sindex"
                            class="text-muted"
                        >
                            <span class="mx-3 py-2 px-0"
                                @click="goto(sub.page)"
                            >
                                {{title[sub.page][lang]}}
                            </span>
                        </li>
                    </ul>
                    
                </span>
            </div>
            
        </div>
    </div>
    <footer class="text-center text-lg-start bg-light text-muted py-3">
        
        <div class="second-line text-center">
            <span>
                Copyright © 2022  <br class="d-block d-md-none">{{site_info.name.en}}
            </span>
        </div>
    </footer>
</template>