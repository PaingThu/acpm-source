<script setup>
    import { onMounted, reactive, ref } from 'vue';
    import { useRoute } from 'vue-router'
    import Nav from '/src/components/NavComponent.vue'
    import CurrentActivities from '/src/contents/CurrentActivitiesContent.vue'
    import { icons } from '/src/variables.js'
    import { goto, getSheets, eventInfo } from '/src/func-common.js'

    
    onMounted(async () => {
        await getSheets()
    })
</script>


<template>
    <Nav />
    <section class="activities">
        <CurrentActivities />
    </section>
</template>

<style lang="scss">
    .activities{
        .banner{
            width: 500px;
            max-width: 100%;
        }
        .description{
            pre{
                white-space: break-spaces;

            }
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