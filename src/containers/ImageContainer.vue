<script  setup>

    const {img_info} = defineProps(["img_info"])

</script>

<template>
     <div class="act-content p-3 rounded">
        <img class="mb-3" :src=img_info.image alt="">
        <span class="img-label" v-html="img_info.label"></span>
    </div>
</template>