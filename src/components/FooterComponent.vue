<script setup>
    import { icons, site_info } from '/src/variables.js'
    import { goto } from '/src/func-common.js'
</script>

<template>
    <a :href="site_info.q_link" target="_blank" class="questionare py-2 px-3 rounded">
        <img class="" :src="site_info.logo" alt="">
        <small class="p-2 rounded"> アンケートお願い致します。</small>
        
    </a>
    <div class="footer-menu py-3 text-muted">
        <div class="container p-3 text-center">
            <img class="footer-logo rounded-circle mb-3" :src="site_info.logo" alt="" @click="goto('')">
            <h5>{{ site_info.name }}</h5>
            <div class="sns-icons mb-3">
                <a 
                    href="" v-html="icons.facebook"
                    class="mx-2"
                    target="_blank"
                >
                </a>
            </div>
            <div class="navs">
                <span v-for="(nav,index) in site_info.navList" :key="index" @click="goto(nav.page)">{{ nav.en_label }}</span>
            </div>
            
        </div>
    </div>
    <footer class="text-center text-lg-start bg-light text-muted py-3">
        
        <div class="second-line text-center">
            <span>Copyright © 2022 Association for Creating Peace in Myanmar</span>
        </div>
    </footer>
</template>