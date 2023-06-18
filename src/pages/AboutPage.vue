<script setup>

    import Nav from '/src/components/NavComponent.vue'
    import { site_info,lang, title, member_info } from '/src/variables.js'

</script>


<template>
    <Nav />
    <section class="about">
        <div class="header text-center py-5">
            <h2 class="">{{title['about-us'][lang]}}</h2>
        </div>
        <div class="acpm-is content py-5">
            <div class="container">
                <div class="inner-content">
                    <img class="mb-3" src="/src/assets/images/logo.png" alt="">
                    <span>{{ site_info.about[lang] }}</span>
                </div>
            </div>
            
        </div>
        <div class="member-info content py-5">
            <div class="container bg-white py-3 px-3">
                <div class="inner-content greeting text-center bg-white p-3 pb-5 px-md-5 border-bottom">
                    <h4 class="rank py-3">{{ site_info.greeting.title[lang] }}</h4>
                    <span class="speech" v-html="site_info.greeting.speech[lang]"></span>
                </div>
                <div class="row m-0 g-5">
                    <div class="col-12 col-md-4 p-3 border-bottom" :class="(index+1)%3 ?'border--md-end ':''" v-for="(member,index) in member_info" :key="member.id">
                        <div class="inner-content text-center">
                            <img :src="member.img" alt="" class="rounded-circle shadow">
                            <span class="name pt-3">{{ member.name[lang] }}</span>
                            <span class="remark">{{ member.remark[lang] }}</span>
                            <span class="speech pt-3">{{ member.speech[lang] }}</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>