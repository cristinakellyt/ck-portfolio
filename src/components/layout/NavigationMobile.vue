<template>
  <nav class="nav-mobile">
    <span class="menu-icon" @click="onToggleMenu" v-if="!isMenuOpen">
      <img src="@/assets/icons/menu-icon.svg" />
    </span>
    <span class="menu-icon" @click="onToggleMenu" v-if="isMenuOpen">
      <img src="@/assets/icons/close-icon.svg" />
    </span>

    <transition name="slide">
      <div v-if="isMenuOpen" class="menu-mobile">
        <ul class="menu-mobile__links">
          <li @click="onToggleMenu"><a href="#about-me">About me</a></li>
          <li @click="onToggleMenu">Skills</li>
          <li @click="onToggleMenu">Projects</li>
          <li @click="onToggleMenu">Contact</li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const onToggleMenu = () => {
  console.log('clicked')
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.nav-mobile {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu-icon {
    cursor: pointer;
    z-index: 100;
    pointer-events: all;

    img {
      width: pxToRem(30);
      height: pxToRem(30);
    }

    &.menu-icon-close {
      position: fixed;
    }
  }
}

.menu-mobile {
  position: fixed;
  top: 0;
  left: 0;
  background-color: $color-primary;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: pxToRem(40);

  &__links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: pxToRem(20);
    width: 100%;
    height: 100vh;

    & li {
      font-weight: 500;
      padding: pxToRem(10);
      background-color: $light-green;
      border: pxToRem(2) solid $greyish-green;
      width: 50%;
      text-align: center;
      border-radius: pxToRem(5);
      box-shadow: 0 pxToRem(2) pxToRem(0) 0 $greyish-green;
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
