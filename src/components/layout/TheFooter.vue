<template>
  <footer class="footer">
    <base-width>
      <div class="footer__content">
        <div class="footer__content--text">
          <p>© 2024 - Designed and developed by <a href="https://www.linkedin.com/in/cristina-gaiao/" target="_blank">Cristina Kelly</a></p>
        </div>
      </div>
    </base-width>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.footer {
  background-color: $color-secondary-shade;
  color: $pure-white;
  padding: pxToRem(16);

  .footer__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer__content--text {
    p {
      font-size: pxToRem(14);

      a {
        color: $pure-white;
        text-decoration: underline;
      }
    }
  }
}

@include media-query($tablet) {
  .footer {
    :deep(.base-width) {
      padding: pxToRem(16) pxToRem(8);
    }
    padding: 0;
  }
}

@include media-query($mobile-large) {
  .footer__content--text {
    p {
      font-size: pxToRem(12);
    }
  }
}

</style>