<script setup>
    import { onMounted } from 'vue';
    import { site_info,lang, title } from '/src/variables.js'
    import { goto, getSheets, eventInfo } from '/src/func-common.js'
    onMounted(async () => {
        await getSheets()
    })
</script>

<template>
    <div class="content current-activities py-3">
        <div class="container py-3">
            <div v-if="eventInfo.new.length" class="inner-content coming-events p-3">
                <h4 class="content-title text-center" :class="lang"> {{site_info.newEvents[lang]}} </h4>
                <div class="row justify-content-center gap-3">
                    <template v-for="(event, eindex) in eventInfo.new" :key="eindex">
                        <div class="each-new-event col-12 col-md-3 border-bottom">
                            <div class="banner d-flex align-items-center shadow">
                                <img :src="`${site_info.imageHost}${event.id}.jpg`" alt="" class="w-100"> 
                            </div>
                            <div class="py-3 d-flex flex-column gap-1">
                                <span>{{ event.date }}</span>
                                <span class="new-event-title">{{ event.title_jp }}</span>
                                <span class="ms-auto text-black cs" @click="goto(`activities/${event.id}`)"><small>詳細はこちら ></small></span>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <div v-if="eventInfo.old.length" class="inner-content p-3">
                <h4 class="content-title text-center py-3" :class="lang"> {{site_info.oldEvents[lang]}} </h4>
                <div class="old-events">
                    <template v-for="(event, eindex) in eventInfo.old" :key="eindex">
                        <div class="each-old-event w-100 border-bottom pb-3">
                            <div class="banner d-flex align-items-center shadow">
                                <img :src="`${site_info.imageHost}${event.id}.jpg`" alt="" class="w-100"> 
                            </div>
                            <div class="info d-flex flex-column gap-2 py-2">
                                <span>{{ event.date }}</span>
                                <span>{{ event.title_jp }}</span>
                                <span class="ms-auto text-black cs" @click="goto(`activities/${event.id}`)"><small>詳細はこちら ></small></span>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
    .current-activities{
        .container{
            .inner-content.coming-events{
                .each-new-event{
                    .new-event-title{
                        min-height: 4.5rem;
                        height: fit-content;
                    }
                }
            }
        }
    }
    
</style>