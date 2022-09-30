<script setup>

    import { colors, site_info } from '/src/variables.js'

    import Nav from '/src/components/NavComponent.vue'

    import WhatWeDo from '/src/contents/WhatWeDo.vue'
    import Activity from '/src/contents/Activity.vue'
    import AboutUs from '/src/contents/AboutUs.vue'

    import CarouselComponent from '/src/components/CarouselComponent.vue'

    import love from '/src/assets/images/banner/love.jpg'

    import tk from '/src/assets/images/cover/thinkers-page.jpg'
    import rgp from '/src/assets/images/cover/research-profile.jpg'
    import gp from '/src/assets/images/cover/github-page.jpg'



    const banner_list = [
        {id:"bn-01", image: love},
        {id:"bn-02", image: love},
        {id:"bn-03", image: love},
    ]

   

    const bgColor = (btn) => {
        return `background: ${btn};`
    }

</script>


<template>
    <Nav />
    <section class="home">
        <!-- Banner -->
        <div class="banner">
            <CarouselComponent :banner_list="banner_list" />
        </div>
        
        <!-- About Us -->
        <AboutUs />
        
        <!-- What We Do -->
        <WhatWeDo />
        
        <!-- Activity -->
        <Activity />
        

    </section>
</template>