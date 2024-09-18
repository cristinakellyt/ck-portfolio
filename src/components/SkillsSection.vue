<template>
  <section class="skills-section">
    <base-width>
      <section-header subHeadingColor="white">
        <template v-slot:heading> skills & tools </template>
        <template v-slot:subheading> My Toolbox and things I can do </template>
      </section-header>

      <div class="skills-grid">
        <div class="skill-item" v-for="(skill, index) in skills" :key="index" ref="skillItems">
          <img :src="skill.icon" />
          <p>{{ skill.name }}</p>
        </div>
      </div>
    </base-width>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import skills from '@/constants/SkillsContent.js'

const skillItems = ref<HTMLDivElement[]>([])

onMounted(() => {
  const observerOptions = {
    root: null, // Use the viewport
    threshold: 0.4 // Trigger when 40% of the skill item is in view
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('active')
        }, index * 120)
      } else {
        entry.target.classList.remove('active')
      }
    })
  }, observerOptions)

  skillItems.value.forEach((skill) => observer.observe(skill))
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.skills-section {
  background-color: $color-secondary;
  padding: pxToRem(100) pxToRem(40);
}

.skills-grid {
  margin: pxToRem(60) 0;
  display: grid;
  row-gap: pxToRem(70);
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(pxToRem(250), 1fr));
  img {
    width: pxToRem(100);
    height: pxToRem(100);
  }
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: max-content;
  gap: pxToRem(10);
  font-weight: 500;
  transition: all 0.3s;
  opacity: 0.2;
  transform: translateY(50px);
  transition: all 0.5s ease-in-out;

  &.active {
    opacity: 1;
    transform: translateY(0);
  }

  p {
    transition: all 0.3s;
    opacity: 0.8;
    font-size: pxToRem(20);
  }
}

@include media-query($tablet) {
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(pxToRem(200), 1fr));
  }
}

@include media-query($mobile-large) {
  .skills-section {
    padding: pxToRem(40) 0;
  }
  .skills-grid {
    row-gap: pxToRem(20);
    grid-template-columns: repeat(auto-fit, minmax(pxToRem(130), 1fr));
    img {
      width: pxToRem(70);
      height: pxToRem(70);
    }
  }
  .skill-item {
    p {
      font-size: pxToRem(18);
    }
  }
}
</style>
