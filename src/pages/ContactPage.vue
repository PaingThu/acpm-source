<script setup>
    import { icons, site_info,lang, title,kaicho_info, member_info } from '/src/variables.js'
    import Nav from '/src/components/NavComponent.vue'
</script>


<template>
    <Nav />
    <section class="contact">
        <div class="header text-center py-5">
            <h2 class="">{{title['contact'][lang]}}</h2>
        </div>
        <div class="content py-5">
            <div class="container">
                <div class="inner-content">
                    <h4 class="mb-3">お気軽にお問い合わせください。</h4>
                    <div class="contact-icons row py-5 border">
                        <div class="col-12 col-md mail">
                            <a :href="`mailto:${site_info.mail}`">
                                <span class="icon rounded shadow mb-3" v-html="icons.mail"></span>
                                <span>{{site_info.mail}}</span>
                            </a>
                        </div>
                        <div class="phone">
                            <a :href="`tel:${site_info.phone}`">
                                <span class="icon rounded shadow mb-3" v-html="icons.phone"></span>
                                <span>{{site_info.phone}}</span>
                            </a>
                        </div>
                        <div class="col-12 col-md facebook">
                            <a :href="site_info.fb_page" target="_blank">
                                <span class="icon rounded shadow mb-3" v-html="icons.facebook"></span>
                                <span>{{site_info.name[lang]}}</span>
                                
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</template>