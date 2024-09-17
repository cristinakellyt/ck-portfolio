<template>
  <div class="section-header">
    <p :class="`${headingColor}`"><slot name="heading"></slot></p>
    <h1 :class="`${subHeadingColor}`"><slot name="subheading"></slot></h1>
  </div>
</template>

<script setup lang="ts">
defineProps({
  headingColor: { type: String, default: 'white' },
  subHeadingColor: { type: String, default: 'white' }
})
</script>

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
    // color: $dark-green;
    font-weight: 500;
  }

  .secondary {
    color: $color-secondary-shade;
  }

  .white {
    color: $pure-white;
  }

  .color-text {
    color: $color-text;
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
