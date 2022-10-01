<script setup>
    import { site_info } from '/src/variables.js'
</script>

<template>
    <div class="content about-us py-5">
        <div class="container py-3">
            <div class="header">
                <img class="logo mb-3" :src="site_info.logo" alt="">
                <h3>{{ site_info.name }}</h3>
                <span>{{ site_info.name }} というのは、</span>
            </div>
        </div>
    </div>
</template>