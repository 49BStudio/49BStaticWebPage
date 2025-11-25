<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainHeader from '@/components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <!-- <div class="flex flex-col min-h-screen"> -->
  <div>
    <MainHeader />
    <main class="flex-1 dark:bg-grey">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
