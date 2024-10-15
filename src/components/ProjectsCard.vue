<template>
  <div class="project-card" :class="[{ 'fade-in': isVisible }]">
    <h2 class="title">{{ name }}</h2>
    <div class="project-card-description">
      <img class="project-card-image" :src="image" />
      <div class="skill-wrapper">
        <div class="skill-tooltip-wrapper" v-for="(skill, index) in skills" :key="index">
          <img class="skill" :src="skill.image" :alt="skill.name" />
          <span class="skill-tooltip">{{ skill.name }}</span>
        </div>
      </div>
      <p class="description">{{ description }}</p>
      <div class="button-wrapper">
        <base-button class="button-website" @click="redirectTo('website')"
          >View website</base-button
        >
        <base-button
          class="button-website"
          @click="redirectTo('github')"
          :disabled="name === 'Charge Guard'"
          :class="{ disabled: name === 'Charge Guard' }"
          >View Github</base-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  repoUrl: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  isInverted: {
    type: Boolean,
    default: false
  },
  skills: {
    type: Array,
    required: true
  }
})

const redirectTo = (value: string) => {
  if (value === 'website') {
    window.open(props.website, '_blank')
  } else {
    window.open(props.repoUrl, '_blank')
  }
}

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100) // Small delay for the transition to start
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.project-card {
  justify-self: center;
  max-width: pxToRem(500);
  background-color: #5560a1;
  padding: pxToRem(20);
  border-radius: pxToRem(10);
  box-shadow: 0px 0px pxToRem(10) rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: pxToRem(20);
  transition: all 0.5s ease;
  transform: translateX(-100%); // Start from off-screen right
  opacity: 0; // Initially hidden

  &.fade-in {
    opacity: 1;
    transform: translateX(0); // Slide into view
  }

  .skill-wrapper {
    display: flex;
    gap: pxToRem(15);
    align-items: flex-end;
    justify-content: end;
    width: 100%;
    margin: pxToRem(10) 0 pxToRem(20) 0;
    //

    .skill-tooltip-wrapper {
      position: relative;

      .skill {
        width: pxToRem(32);
        cursor: pointer;
      }

      .skill-tooltip {
        visibility: hidden;
        background-color: $color-primary;
        color: #fff;
        font-family: $secondary-font-family;
        text-align: center;
        border-radius: pxToRem(5);
        padding: pxToRem(5);
        position: absolute;
        z-index: 100;
        top: 110%;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        opacity: 0;
        transition: opacity 0.3s;
      }

      &:hover .skill-tooltip {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  .project-card-image {
    border-radius: pxToRem(10);
    height: pxToRem(400);
    width: pxToRem(400);
    align-self: center;
    object-fit: cover;
  }

  .title {
    width: max-content;
    font-size: pxToRem(24);
    font-weight: 500;
    display: inline-block;
    font-family: $secondary-font-family;
    font-weight: 600;
    text-align: center;
  }

  &-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: pxToRem(10);
    width: 100%;
    height: 100%;

    .description {
      margin: pxToRem(10) 0 pxToRem(20) 0;
    }

    .button-wrapper {
      margin-top: auto;
      display: flex;
      gap: pxToRem(40);
      justify-content: center;
      width: 100%;
    }
  }

  .disabled {
    cursor: not-allowed;
    background-color: #8f8e8e;
    color: #362a2a;
  }
}

@include media-query($tablet) {
  .project-card {
    padding: pxToRem(10);
    gap: pxToRem(10);

    .project-card-image {
      height: pxToRem(300);
      width: pxToRem(300);
    }

    &-description {
      gap: pxToRem(5);
    }

    .skill-wrapper {
      flex-wrap: wrap;
    }
  }
}
</style>
