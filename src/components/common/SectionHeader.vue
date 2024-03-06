<template>
  <div class="section-header">
    <p><slot name="heading"></slot></p>
    <h1><slot name="subheading"></slot></h1>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.section-header {
  p {
    font-style: italic;
    font-weight: bold;
    font-family: $secondary-font-family;
    font-size: pxToRem(13);
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  h1 {
    color: $dark-green;
    font-weight: 500;
  }
}

@include media-query($mobile-large) {
  .section-header {
    p {
      font-size: pxToRem(11);
    }
  }
}
</style>
