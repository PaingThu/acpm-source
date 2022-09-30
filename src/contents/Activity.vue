<script setup>

    import ImageContainer from '/src/containers/ImageContainer.vue'

    // import activity1 from '/src/assets/images/activities/acticity1.jpg'

    const activity_list = [
        { image:"", label:"活動 1"},
        { image:"", label:"活動 2"},
        { image:"", label:"活動 3"}
    ]

</script>

<template>
    <div class="content activity py-5">
        <div class="container py-3">
            <h1 class="content-title" > 活動 </h1>
            <h4 class="content-subtitle" >Activity</h4>
            <div class="line"></div>
            <div class="inner-content py-3">
                <span class="setsumei">
                    ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー。<br> ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー。
                </span>
                <div class="row act-images py-3">
                    <div class="col-12 col-md-4" v-for="(activity,index) in activity_list" :key="index">
                        <ImageContainer :img_info="activity" />
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
</template>