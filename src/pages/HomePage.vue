<script setup>

    import { colors, site_info } from '/src/variables.js'

    import Nav from '/src/components/NavComponent.vue'

    import WhatWeDo from '/src/contents/WhatWeDo.vue'
    import CurrentActivities from '/src/contents/CurrentActivities.vue'
    import AboutUs from '/src/contents/AboutUs.vue'

    import CarouselComponent from '/src/components/CarouselComponent.vue'



    

   

    const bgColor = (btn) => {
        return `background: ${btn};`
    }

</script>


<template>
    <Nav />
    <section class="home">
        <!-- Banner -->
        <div class="banner">
            <CarouselComponent :banner_list="site_info.banner_list" />
        </div>

        <!-- CuurrentActivities -->
        <CurrentActivities />
        
        <!-- About Us -->
        <AboutUs />

        
        <!-- What We Do -->
        <WhatWeDo />
        
        

    </section>
</template>