<script setup lang="ts">
    // import { RouterLink } from 'vue-router'
    // import { setLanguages } from '../modules/i18n/index'
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; // 用于检测用户是否有将系统的主题色设置为亮色或者暗色
    console.log('prefersDark', prefersDark)
    
    function toggleDark() {
      const theme = document.body.getAttribute("theme-mode")
      document.body.setAttribute("theme-mode", theme=="dark" ? "light" : "dark")
      // const isDark = useDark()
      // useToggle(isDark)
    }
</script> 

<template>
  <!-- 项目中直接可以写英文翻译是最好的，而不是写对应的key值，不好看（可以再做优化） -->
  <nav class="nav-box">
    <p>{{$t('home')}}</p>
    <p @click="toggleDark">{{$t('toggle_dark')}}</p>
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