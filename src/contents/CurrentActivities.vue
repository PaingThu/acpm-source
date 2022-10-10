<script setup>

    import { site_info,lang, title } from '/src/variables.js'
    import ImageContainer from '/src/containers/ImageContainer.vue'

    // import activity1 from '/src/assets/images/activities/acticity1.jpg'

    

</script>

<template>
    <div class="content activity py-5">
        <div class="container py-3">
            <h1 class="content-title" :class="lang"> {{title['current-activities'][lang]}} </h1>
            <!-- <h4 v-if="lang=='jp'" class="content-subtitle" >Activity</h4> -->
            <div class="line"></div>
            <div class="inner-content py-3">
                
                
            </div>
        </div>
        
    </div>
</template>