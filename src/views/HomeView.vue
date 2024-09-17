<template>
  <main>
    <TheHero />
    <AboutMeSection />
    <SkillsSection />
  </main>
  <TheFooter />
</template>

<script setup lang="ts">
import TheHero from '@/components/TheHero.vue'
import AboutMeSection from '@/components/AboutMeSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
</script>
