<script setup>
import HeroSection from '@/components/HeroSection.vue'
import { FwbCard, FwbHeading, FwbP, FwbImg, FwbButton } from 'flowbite-vue'
</script>

<template>
  <hero-section />

  <!-- about -->
  <section class="p-5 flex flex-col md:flex-row-reverse">
    <fwb-img alt="flowbite-vue" src="https://picsum.photos/200/300" />

    <fwb-heading tag="h1">About Us!</fwb-heading>
    <fwb-p
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum sapien sit amet
      vehicula blandit. Phasellus vel tincidunt ipsum. Vivamus placerat tortor at enim maximus
      facilisis. Sed sodales velit in ex fermentum, vitae dignissim nisl placerat. Proin sit amet
      efficitur orci, quis euismod sapien. Nam sagittis arcu et felis consequat, eget egestas risus
      sodales. Nullam quis arcu consequat, dapibus est at, scelerisque mi.</fwb-p
    >
  </section>

  <!-- cards -->
  <section class="flex flex-col md:flex-row max-w-1px items-center">
    <fwb-card href="#" class="basis-1/2 m-5">
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Running Beehind
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          An exciting platforming game set in an world where fantasy and technology combine!
        </p>
        <router-link to="/games"
          ><fwb-button color="default">public tests available!</fwb-button></router-link
        >
      </div>
    </fwb-card>
    <fwb-card href="#" class="basis-1/2 m-5">
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          More Comming Soon!
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          more games comming soon! check out the game pages for all our current games!
        </p>
      </div>
    </fwb-card>
  </section>
</template>
