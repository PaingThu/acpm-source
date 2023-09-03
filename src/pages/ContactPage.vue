<script setup>
    import { icons, site_info,lang, title } from '/src/variables.js'
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
                    <div class="contact-icons">
                        <div class="mail">
                            <div class="icon-box">
                                <a 
                                    :href="`mailto:${site_info.mail}`"
                                    class="icon rounded shadow" v-html="icons.mail"
                                >
                                </a>
                                <span>{{site_info.mail}}</span>
                            </div>
                        </div>
                        <div class="phone">
                            <div class="icon-box">
                                <a
                                    :href="`tel:${site_info.phone}`"
                                    class="icon rounded shadow" v-html="icons.phone"
                                >
                                </a>
                                <span>{{site_info.phone}}</span>
                            </div>
                        </div>
                        <div class="facebook">
                            <div class="icon-box">
                                <a
                                    :href="site_info.fb_page" target="_blank"
                                    class="icon rounded shadow" v-html="icons.facebook"
                                >
                                </a>
                                <span>{{site_info.name[lang]}}</span>
                            </div>
                        </div>
                        <div class="facebook">
                            <div class="icon-box">
                                <a
                                    :href="site_info.twitter" target="_blank"
                                    class="icon rounded shadow" v-html="icons.twitter"
                                >
                                </a>
                                <span>{{site_info.name[lang]}}</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</template>