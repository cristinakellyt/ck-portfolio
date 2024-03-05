<template>
  <header>
    <base-width class="header-desktop">
      <h1 class="header-desktop--logo">Cristina Kelly</h1>

      <nav v-if="screenSizeStore.isDesktop">
        <ul class="navigation-list">
          <li class="navigation-link">
            <a href="#about-me">About me</a>
          </li>
          <li class="navigation-link">
            <a href="#skills">Skills</a>
          </li>
          <li class="navigation-link">
            <a href="#projects">Projects</a>
          </li>
          <li class="navigation-link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <NavigationMobile v-else />
    </base-width>
  </header>
</template>

<script setup lang="ts">
import { useScreenSizeStore } from '@/stores/screenSizeStore'
import NavigationMobile from '@/components/layout/NavigationMobile.vue'

const screenSizeStore = useScreenSizeStore()
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

header {
  background-color: $color-primary;
  width: 100%;
}

.header-desktop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: pxToRem(15);

  &--logo {
    font-family: 'Italianno', sans-serif;
    font-size: pxToRem(40);
    font-weight: 400;
  }

  .navigation-list {
    display: flex;
    align-items: center;
    gap: pxToRem(90);
    font-weight: 500;

    & li {
      position: relative;
      cursor: pointer;
      line-height: 1;

      &:hover {
        .hover-effect {
          left: 0;
          width: 100%;
          opacity: 1;
        }
      }
    }
  }

  .navigation-link {
    padding-bottom: pxToRem(2);
    transition: all 0.3s ease-in;
    border-bottom: pxToRem(2) solid transparent;
    position: relative;

    &::after {
      content: '';
      display: inline-block;
      width: 0%;
      height: pxToRem(2);
      background-color: $color-secondary;
      position: absolute;
      bottom: -5px;
      left: 50%;

      transition: all 0.3s ease;
    }

    &:hover::after {
      left: 0;
      width: 100%;
    }
  }
}

@include media-query($tablet) {
  .header-desktop {
    position: fixed;
    z-index: 1000;
    background-color: $color-primary;
    width: 100%;

    &--logo {
      z-index: 1000;
    }
  }
}

@include media-query($mobile-large) {
  .header {
    padding: pxToRem(15);
  }
  .header-logo {
    font-size: pxToRem(30);
  }
}
</style>
