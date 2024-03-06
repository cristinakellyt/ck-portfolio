<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.base-card {
  background-color: $light-green;
  padding: pxToRem(15);
  border-radius: pxToRem(5);
  box-shadow: $default-box-shadow;
}
</style>
