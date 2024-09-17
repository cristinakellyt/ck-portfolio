<template>
  <section class="section-hero">
    <div class="section-hero__container">
      <!-- <p>Welcome</p> -->
      <h1>Cristina Kelly</h1>
      <p class="section-hero__job">Front-End Developer</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.section-hero {
  height: 100vh;
  background-image: url('@/assets/images/hero-img-3.png');
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
      border: pxToRem(2) solid $pure-white;
      height: 50%;
      width: 50%;
      max-width: pxToRem(1300);
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      opacity: 0; // Initially hidden
      animation: slide-in-left 1s ease forwards;
    }
    &::after {
      content: '';
      border: pxToRem(2) solid $pure-white;
      height: 50%;
      width: 50%;
      max-width: pxToRem(1300);
      position: absolute;
      top: 45%;
      right: 48%;
      transform: translate(48%, -34%);
      opacity: 0; // Initially hidden
      animation: slide-in-right 1s ease forwards 0.3s; // Delayed to make it slide after ::before
    }
  }

  &__job {
    color: $color-text;
    font-weight: 600;
    font-family: $secondary-font-family;
  }
}

// Animations

@keyframes slide-in-left {
  0% {
    transform: translateX(-150%); // Start off-screen to the left
    opacity: 0;
  }
  100% {
    transform: translate(50%, -50%); // Slide into view
    opacity: 1;
  }
}

@keyframes slide-in-right {
  0% {
    transform: translateX(150%); // Start off-screen to the right
    opacity: 0;
  }
  100% {
    transform: translate(48%, -34%); // Slide into view
    opacity: 1;
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
