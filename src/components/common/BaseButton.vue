<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

button {
  border: pxToRem(2) solid $color-secondary-shade;
  box-shadow: 0 0 pxToRem(10) rgba(0, 0, 0, 0.1);
  background-color: rgba($color-secondary-shade, 0.639);
  border-radius: pxToRem(5);
  color: $pure-white;
  display: inline-block;
  padding: pxToRem(10) pxToRem(20);
  transition: all 0.3s ease-in;
  cursor: pointer;
  font-weight: 600;
  width: 100%;

  &:hover{
   background-color:$color-secondary-shade;
   color: $pure-white;  
   transform: translateY(pxToRem(-3));
  }
}
</style>
