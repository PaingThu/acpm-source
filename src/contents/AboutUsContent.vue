<script setup>
    import { site_info, lang } from '/src/variables.js'
</script>

<template>
    <div class="content about-us py-5">
        <div class="container py-3">
            <div>
                <img class="logo mb-3" :src="site_info.logo" alt="">
                <h3>{{ site_info.name[lang] }}</h3>
                <span v-html="site_info.about[lang]" class="intro" :class="lang"> </span>
            </div>
        </div>
    </div>
</template>