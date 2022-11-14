<script setup>
    import { lang, icons } from '/src/variables.js'
</script>
<template>
    <li class="nav-item lang-change dropdown">
        <a 
            class="nav-link dropdown-toggle"
            href="#" role="button" data-bs-toggle="dropdown" 
            aria-expanded="false"
        >
            <img class="border" :src="icons[lang]" alt=""/>
        </a>
        <ul 
            class="dropdown-menu px-3 mb-2">
            <li class="py-2" @click="lang='jp'">
                <img class="border" :src="icons.jp" alt="" />
            </li>
            <li class="py-2" @click="lang='mm'">
                <img class="border" :src="icons.mm" alt="" />
            </li>
        </ul>
    </li>
</template>