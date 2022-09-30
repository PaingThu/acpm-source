<script setup>
    import "bootstrap/dist/css/bootstrap.min.css"
    import "bootstrap"

    
    import Footer from './components/FooterComponent.vue'
    

</script>

<template>
    
    <router-view :key="$route.fullPath"></router-view>
    <Footer />
</template>


