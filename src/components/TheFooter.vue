<script setup lang="ts">
    // import { RouterLink } from 'vue-router'
    // import { setLanguages } from '../modules/i18n/index'

</script> 

<template>
  <!-- 项目中直接可以写英文翻译是最好的，而不是写对应的key值，不好看（可以再做优化） -->
  <nav class="nav-box">
    <p>{{$t('home')}}</p>
    <p>{{$t('toggle_dark')}}</p>
    <p @click="setLanguages">{{ $t('toggle_langs') }}</p>
    <RouterLink to="/about">{{ $t('about') }}</RouterLink>
  </nav>
</template>

<style scoped>
    .nav-box{
        border: 1px solid firebrick;
        width: 500px;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;       
    }
    p{
        cursor: pointer;
    }
</style>