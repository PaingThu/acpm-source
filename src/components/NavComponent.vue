<script setup>
    import {ref, onMounted} from 'vue'
    import {useRoute} from 'vue-router'
    import { root, title, site_info,lang } from '/src/variables.js'
    import { goto } from '/src/func-common.js'
    const route = useRoute()
    const page = route.name

    

    const yPosition = ref(0);

    const getNavStyle = (page) => {
        const defaultStyle = 'navbar-light bg-white shadow-sm'
        if(page[0]){
            return defaultStyle
        }else{
            return yPosition.value > 120 ? defaultStyle : 'home'
        }
        
    }

    onMounted(() => {
        window.addEventListener("scroll", (event) => {
            yPosition.value =  window.pageYOffset
        });
    })


</script>

<template>
    <nav class="navbar navbar-expand-lg" :class="getNavStyle($route.name)">
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
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse py-3 px-3 px-md-0 rounded" id="navbarScroll">
                <ul class="navbar-nav ms-auto me-2 my-2 my-lg-0 navbar-nav-scroll">
                    <li v-for="(nav,index) in site_info.navList" :key="index" class="nav-item dropdown" :class="lang">
                        <span 
                            v-if="!nav.subPages"
                            class="nav-link mx-1"
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
                            class="dropdown-menu" 
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
                </ul>
            </div>
            <div class="lang-change px-3">
                <input class="form-check-input me-2" type="radio" id="checkboxjp" value="jp" :checked="lang=='jp'" @click="lang='jp'">
                <img for="checkboxjp" class="me-2 shadow" src="/src/assets/images/country/jp.svg" alt="">
                <input class="form-check-input me-2" type="radio" id="checkboxmm" value="mm" :checked="lang=='mm'" @click="lang='mm'">
                <img for="checkboxmm" class="shadow" src="/src/assets/images/country/mm.svg" alt="">

            </div>
        </div>
    </nav>
</template>
