<script setup>
    import { icons, site_info,lang, title } from '/src/variables.js'
    import Nav from '/src/components/NavComponent.vue'
</script>


<template>
    <Nav />
    <section class="contact">
        <div class="header text-center py-5">
            <h2 class="">{{title['media-publication'][lang]}}</h2>
        </div>
        <div class="content py-5">
            <div class="container">
                <div class="inner-content">
                    <!-- <h4 class="mb-3">Media掲載</h4> -->
                </div>
            </div>
        </div>
    </section>
</template>