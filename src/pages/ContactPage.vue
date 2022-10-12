<script setup>
    import { site_info,lang, title,kaicho_info, member_info } from '/src/variables.js'
    import Nav from '/src/components/NavComponent.vue'
</script>


<template>
    <Nav />
    <section class="contact">
        <div class="header text-center py-5">
            <h2 class="">{{title['contact'][lang]}}</h2>
        </div>
    </section>
</template>