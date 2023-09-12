<script setup lang="ts">
    // import {  RouterView } from 'vue-router'
    // import TheFooter from '../components/TheFooter.vue'
    console.log('home')
</script>

<template>
    <main class="main-box">
        <RouterView />
        <TheFooter></TheFooter>
        <p>[Home Layout]</p>
    </main>
</template>

<style scoped>
    .main-box{
        text-align: center;
    }
</style>