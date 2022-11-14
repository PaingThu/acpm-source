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
                    <div class="contact-icons row py-5 border">
                        <div class="col-12 col-md mail">
                            <div class="icon-box">
                                <a 
                                    :href="`mailto:${site_info.mail}`"
                                    class="icon rounded shadow mb-3" v-html="icons.mail"
                                >
                                </a>
                                <span>{{site_info.mail}}</span>
                            </div>
                        </div>
                        <div class="phone">
                            <div class="icon-box">
                                <a
                                    :href="`tel:${site_info.phone}`"
                                    class="icon rounded shadow mb-3" v-html="icons.phone"
                                >
                                </a>
                                <span>{{site_info.phone}}</span>
                            </div>
                        </div>
                        <div class="col-12 col-md facebook">
                            <div class="icon-box">
                                <a
                                    :href="site_info.fb_page" target="_blank"
                                    class="icon rounded shadow mb-3" v-html="icons.facebook"
                                >
                                </a>
                                <span>{{site_info.name[lang]}}</span>
                                <a href="https://twitter.com/intent/tweet?screen_name=paingmawthu&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-size="large" data-text="Hi! Nice to meet you." data-related="" data-show-screen-name="false" data-show-count="false"></a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</template>