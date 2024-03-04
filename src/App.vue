<template>
  <TheHeader />
  <RouterView />
</template>

<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue'
import { useScreenSizeStore } from '@/stores/screenSizeStore'

const screenSizeStore = useScreenSizeStore()
screenSizeStore.initResponsive()
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';
</style>
