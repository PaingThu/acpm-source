<script setup>
    import {ref, onMounted} from 'vue'
    import {useRoute} from 'vue-router'
    import { root, title, site_info,lang, icons, yPosition } from '/src/variables.js'
    import { goto } from '/src/func-common.js'
    const route = useRoute()
    const page = route.name

    const getNavStyle = (page) => {
        const defaultStyle = 'navbar-light bg-white shadow-sm'
        if(page[0]){
            return defaultStyle
        }else{
            return yPosition.value > 120 ? defaultStyle : 'home navbar-dark'
        }
        
    }

    const toggleBtnClass = ref("")

    onMounted(() => {
        window.addEventListener("scroll", (event) => {
            yPosition.value =  window.pageYOffset
        });
        //For Navbar Hanburger Menu btn icon class
        toggleBtnClass.value = document.getElementById("navbarScroll").classList.contains("collapsed") ? "" : "collapsed"
    })


</script>

<template>
    <nav class="navbar navbar-expand-md" :class="getNavStyle($route.name)">
        <div class="container position-relative">
            <span class="navbar-brand py-0" @click="goto('')">
                <img class="logo p-0 rounded-circle shadow" :src="site_info.logo" alt="">
                <div class="logo-text ms-3">
                    <span class="row">
                        <span class="site-name">{{ site_info.name[lang] }}</span>
                        <small v-if="lang=='jp'">{{ site_info.short_name }}</small>
                    </span>
                </div>
            </span>
            <button :class="toggleBtnClass" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="toggler-icon rounded top"></span>
                <span class="toggler-icon rounded middle"></span>
                <span class="toggler-icon rounded bottom"></span>
            </button>
            <div class="collapse navbar-collapse px-3 px-md-0 rounded" id="navbarScroll">
                <ul class="navbar-nav ms-auto pb-3 pb-md-0 me-2 my-2 my-lg-0 navbar-nav-scroll">
                    <li v-for="(nav,index) in site_info.navList" :key="index" class="nav-item dropdown" :class="lang">
                        <span 
                            v-if="!nav.subPages"
                            class="nav-link mx-md-2"
                            :class="page.includes(nav.page) ? 'active' : ''" 
                            aria-current="page" 
                            @click="goto(nav.page)"
                        >
                            {{title[nav.page?nav.page:'home'][lang]}}
                        </span>
                        <a 
                            v-if="nav.subPages" 
                            class="nav-link dropdown-toggle"
                            :class="page.includes(nav.page) ? 'active' : ''" 
                            href="#" role="button" data-bs-toggle="dropdown" 
                            aria-expanded="false"
                        >
                            {{title[nav.page?nav.page:'home'][lang]}}
                        </a>
                        <ul 
                            v-if="nav.subPages" 
                            class="dropdown-menu mb-2" 
                            :class="lang">
                            <li 
                                v-for="(sub,sindex) in nav.subPages" :key="sindex"
                            >
                                <span class="mx-3 py-2"
                                    @click="goto(sub.page)"
                                >
                                    {{title[sub.page][lang]}}
                                </span>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item lang-change dropdown">
                        <a 
                            class="nav-link dropdown-toggle"
                            href="#" role="button" data-bs-toggle="dropdown" 
                            aria-expanded="false"
                        >
                            <img class="border" :src="icons[lang]" alt=""/>
                        </a>
                        <ul 
                            class="dropdown-menu px-3 mb-2">
                            <li class="py-2" @click="lang='jp'">
                                <img class="border" :src="icons.jp" alt="" />
                            </li>
                            <li class="py-2" @click="lang='mm'">
                                <img class="border" :src="icons.mm" alt="" />
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
