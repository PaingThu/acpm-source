<script  setup>

    const {banner_list} = defineProps(["banner_list"])

</script>

<template>
    <div id="carouselExampleControls" class="carousel slide shadow-sm" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item" :class="index==0 ? 'active' : ''" v-for="(banner,index) in banner_list" :key="banner.id">
                <!-- <img :src="banner.image" class="d-block w-100 " alt="..."> -->
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>