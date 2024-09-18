<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

button {
  border: none;
  box-shadow: pxToRem(4) pxToRem(4) 0 0 rgba(0, 0, 0, 0.322);
  background-color: $color-secondary;
  border-radius: pxToRem(5);
  color: $pure-white;
  display: inline-block;
  padding: pxToRem(10) pxToRem(20);
  transition: all 0.3s ease-in;
  cursor: pointer;
  font-weight: 600;
  font-size: inherit;
  width: 100%;

  &:hover{
   background-color:$color-secondary-shade;
   color: $pure-white;  
   transform: translateY(pxToRem(-2));
  }
}
</style>
