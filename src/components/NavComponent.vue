<script setup>
    import {ref, onMounted} from 'vue'
    import {useRoute} from 'vue-router'
    import { root, site_info } from '/src/variables.js'
    import { goto } from '/src/func-common.js'
    const route = useRoute()
    const page = route.name

    

    const yPosition = ref(0);

    const getNavStyle = (page) => {
        const defaultStyle = 'navbar-light bg-white shadow-sm'
        console.log("Page",page)
        if(page){
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
        <div class="container">
            <a class="navbar-brand py-0" href="/">
                <img class="logo p-0 rounded-circle shadow" src="/src/assets/images/logo.png" alt="">
                <div class="logo-text ms-3">
                    <span class="row">
                        <span class="site-name">{{ site_info.name }}</span>
                        <small>{{ site_info.short_name }}</small>
                    </span>
                </div>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                    <li v-for="(nav,index) in site_info.navList" :key="index" class="nav-item">
                        <span 
                            class="nav-link mx-1"
                            :class="page==nav.page.toLowerCase() ? 'active' : ''" 
                            aria-current="page" 
                            @click="goto(nav.page =='' ? `/${root}/` : `/${root}/${nav.page.toLowerCase()}`)"
                        >
                            {{nav.en_label}}
                        </span>
                    </li>
                    
                    
                </ul>
            </div>
        </div>
    </nav>
</template>
