<script setup>
    import { onMounted, reactive, ref } from 'vue';
    import { useRoute } from 'vue-router'
    import Nav from '/src/components/NavComponent.vue'
    import { icons, site_info } from '/src/variables.js'
    import { goto, getSheets, eventInfo, urlify } from '/src/func-common.js'

    const route = useRoute()
    const event = ref({})
    
    onMounted(async () => {
        await getSheets()
        event.value = eventInfo.all.filter(e=> e.id == route.params.id)[0]
        event.value.description = urlify(event.value.description)
    })
</script>


<template>
    <Nav />
    <section class="activities">
        <div class="container py-5 px-3">
            <div class="content d-flex flex-column align-items-center gap-3 px-md-5">
                <div class="title d-flex flex-column flex-md-row gap-2 pb-2 align-items-center w-100 border-bottom mb-3">
                    <div class="d-flex gap-2 align-items-center me-auto">
                        <span class="back fw-bold rounded-circle shadow-sm border cs" @click="goto(site_info.from.replace('/',''))" v-html="icons.back"></span>
                        <h4 class="mb-0">{{ event.title_jp }}</h4>
                    </div>
                    <span class="ms-auto">{{ event.date }}</span>
                </div>
                <div class="banner d-flex align-items-center shadow">
                    <iframe v-if="event.youtube_video_id" width="560" height="315" src="https://www.youtube.com/embed/wxT46G176a4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <img v-else :src="`https://drive.google.com/uc?id=${event.image_id}`" alt="" class="w-100">
                </div>
                <div class="description">
                    <pre v-html="event.description"></pre>
                </div>
                <div v-if="event.fb_link" class="fb-link ms-auto">
                    <a :href="event.fb_link" target="_blank" v-html="icons.facebook"></a>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss">
    .activities{
        .title{
            .back{
                flex: 0 0 35px;
                width: 35px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: gray;
            }
        }
        .banner{
            width: 500px;
            max-width: 100%;
        }
        .fb-link{
            a{
                svg{
                    color: #3c5899;
                }
            }
        }
    }
</style>