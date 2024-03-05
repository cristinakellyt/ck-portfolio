<template>
  <section class="section-hero">
    <div class="section-hero__container">
      <p>Welcome</p>
      <h1>I'm Cristina Kelly</h1>
      <p class="section-hero__job">Front-End Developer</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.section-hero {
  height: 100vh;
  background-image: url('@/assets/images/hero-img.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &__container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: pxToRem(10);
    height: 80%;
    width: 100%;
    position: relative;

    h1 {
      font-weight: 500;
      font-size: pxToRem(42);
    }

    &::before {
      content: '';
      border: pxToRem(2) solid $color-secondary;
      height: 50%;
      width: 50%;
      max-width: pxToRem(1300);
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
    }
    &::after {
      content: '';
      border: pxToRem(2) solid $color-secondary;
      height: 50%;
      width: 50%;
      max-width: pxToRem(1300);
      position: absolute;
      top: 45%;
      right: 48%;
      transform: translate(48%, -34%);
    }
  }

  &__job {
    background: linear-gradient(to right, $color-secondary, $color-primary);
    margin-top: pxToRem(10);
    box-shadow: pxToRem(2) pxToRem(2) pxToRem(18.5) rgba($color-text, 0.25);
    padding: pxToRem(5) pxToRem(8);
    border-radius: pxToRem(5);
  }
}

@include media-query($tablet) {
  .section-hero__container {
    height: 100vh;

    &::before,
    &::after {
      width: 80%;
      height: 40%;
    }

    &::after {
      top: 46%;
      right: 45%;
    }

    h1 {
      font-size: pxToRem(32);
    }
  }
}

@include media-query($mobile-large) {
  .section-hero__container {
    &::before,
    &::after {
      height: 25%;
    }

    &::after {
      top: 48%;
      right: 45%;
    }

    h1 {
      font-size: pxToRem(24);
    }
  }
}
</style>
