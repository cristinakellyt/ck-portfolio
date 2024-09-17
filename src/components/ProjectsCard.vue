<template>
    <div class="project-card"
     :class="[{'fade-in': isVisible}]">
      <h2 class="title">{{ name }}</h2>
      <div class="project-card-description" >
        <img class="project-card-image" :src="image" />
        <p class="description">{{ description }}</p>
        <div class="button-wrapper">
          <base-button class="button-website" @click="redirectTo('website')">View website</base-button>
          <base-button class="button-repo"  @click="redirectTo('code')">View Github Repo</base-button>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps(
  {
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
    }
  }
)

const redirectTo = (type: String) => {
  if(type === 'website'){
    window.open(props.website, '_blank')
  } else {
    window.open(props.repoUrl, '_blank')
  }
}

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100); // Small delay for the transition to start
});

</script>

<style scoped lang="scss">
  @import '@/assets/scss/main.scss';

  .project-card{
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

    &.fade-in{
      opacity: 1;
      transform: translateX(0); // Slide into view
    }

    .project-card-image{
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

    &-description{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: pxToRem(10);
      width: 100%;
      height: 100%;

    

      .description{
        font-size: pxToRem(16);
        margin: pxToRem(10) 0 pxToRem(20) 0;
      }

      .button-wrapper{
        margin-top: auto;
        display: flex;
        gap: pxToRem(10);
        justify-content: center;
      }

      .button-website, .button-repo{
        border: pxtoRem(2) solid $color-secondary-shade;
        box-shadow: 0 0 pxToRem(10) rgba(0, 0, 0, 0.1);
        background-color: rgba($color-secondary-shade, 0.639);
        border-radius: pxToRem(5);
        color: $pure-white;
        display: inline-block;
        padding: pxToRem(10) pxToRem(20);
        transition: all 0.3s ease-in;
        cursor: pointer;
        font-weight: 600;

        &:hover{
          background-color:$color-secondary-shade;
          color: $pure-white;  
          transform: translateY(pxToRem(-3));
        }
      }
    }
  }

@include media-query($tablet) {
  .project-card{
    padding: pxToRem(10);
    gap: pxToRem(10);

    .project-card-image{
      height: pxToRem(300);
      width: pxToRem(300);
    }

    &-description{
      gap: pxToRem(5);

      .button-website, .button-repo{
        padding: pxToRem(5) pxToRem(10);
      }
    }
  }
}
</style>