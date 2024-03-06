<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

button {
  border: pxToRem(1) solid $dark-green;
  padding: pxToRem(8) pxToRem(10);
  color: $dark-green;
  font-weight: 500;
  background-color: $light-green;
  border-radius: pxToRem(5);
  box-shadow: 0 pxToRem(2) pxToRem(0) 0 $greyish-green;
  font-size: inherit;
  cursor: pointer;
}
</style>
