<template>
  <nav class="nav-mobile">
    <span class="menu-icon" @click="() => (isMenuOpen = true)" v-if="!isMenuOpen">
      <img src="@/assets/icons/menu-icon.svg" />
    </span>
    <span class="menu-icon" @click="() => (isMenuOpen = false)" v-if="isMenuOpen">
      <img src="@/assets/icons/close-icon.svg" />
    </span>

    <transition name="slide">
      <div v-if="isMenuOpen" class="menu-mobile">
        <ul class="menu-mobile__links">
          <li
            @click="
              () => {
                isMenuOpen = false
                router.push({ name: 'home' })
              }
            "
          >
            <base-button>Home</base-button>
          </li>
          <li
            @click="
              () => {
                isMenuOpen = false
                router.push({ name: 'projects' })
              }
            "
          >
            <base-button>Projects</base-button>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter() // Get the router instance
const isMenuOpen = ref(false)
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
      width: 50%;
      text-align: center;
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
