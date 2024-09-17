<template>
  <section class="contact-page">
    <base-width>
      <section-header class="header">
        <template v-slot:heading> contact </template>
        <template v-slot:subheading> Get in Touch </template>
      </section-header>

      <div class="contact-page--content">
        <div class="contact-page--text">
          <p> Let's make something great together! </p>
          <div class="contact-wrapper">
            <a href="https://www.linkedin.com/in/cristina-gaiao/">
              <img src="@/assets/icons/github.svg" alt="contact-github" />
            </a>
            <a href="https://github.com/cristinakellyt">
              <img src="@/assets/icons/linkedin.svg" alt="contact-linkedin" />
            </a>
            
          </div>
        </div>
        <div class="contact-page--form">
          <form class="form">
            <div class="form-group">
              <input class="form-input" id="name" type="text" placeholder="Your name" required />
              <label class="form-label" for="name"> Your name </label>
            </div>
            <div class="form-group">
              <input class="form-input" id="email" type="email" placeholder="Your e-mail" required />
              <label class="form-label" for="email"> Your e-mail </label>
            </div>
            <div class="form-group">
              <textarea class="form-textarea"
               id="email"
               type="email"
               placeholder="Message"
               required
               rows="5" />
              <label class="form-label" for="email"> Message </label>
            </div>
            
            <button type="submit"> Send e-mail</button>
          </form>
        </div>
      </div>
    </base-width>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';
.contact-page {
  padding: pxToRem(100) pxToRem(40);
  // text-align: center;
  background-color: $color-primary;

  .header {
    margin-bottom: 32px;
  }

  .contact-page--content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: pxToRem(32);

    .contact-page--text {
      p {
        margin-bottom: pxToRem(16);
      }
    }

    .contact-wrapper {
      display: flex;
      gap: pxToRem(16);
      align-items: center;
      // justify-content: center;
      margin-top: pxToRem(32);

      img {
        width: pxToRem(36);
        height: pxToRem(36);
        cursor: pointer;
        transition: transform 0.2s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    .contact-page--form {
      .form {
        display: grid;
        gap: pxToRem(16);

        .form-group {
          position: relative;
        }

        .form-label {
          position: absolute;
          top: pxToRem(12);
          left: pxToRem(12);
          opacity: 0;
          font-size: pxToRem(14);
          font-family: $secondary-font-family;
          color:$pure-white;
          transition: all 0.2s ease-in-out;
        }

        &-input, &-textarea {
          height: pxToRem(48);
          width: 100%;
          border: none;
          border-radius: pxToRem(4);
          padding: pxToRem(12);
          border-bottom: pxToRem(3) solid $light-green;
          line-height: pxToRem(19);
          margin-bottom: pxToRem(24);
          transition: all 0.2s ease-in-out;
          box-shadow: pxToRem(4) pxToRem(4) 0 0 rgba(0, 0, 0, 0.322);

          &::placeholder {
            color: $color-primary;
            font-size: pxToRem(14);
            font-weight: 400;
            font-family: $secondary-font-family;
          }

          &:focus {
            outline: none;
            border-bottom: pxToRem(3) solid $color-secondary;
          }

          &:not(:placeholder-shown) + .form-label {
            opacity: 1;
            top: pxToRem(-24);
            left: 0;
          }
        }

        &-textarea {
          resize: none;
          height: auto;
        }

        button {
          padding: pxToRem(16);
          background-color: $color-secondary;
          color: $color-text;
          border: none;
          border-radius: 4px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: pxToRem(4) pxToRem(4) 0 0 rgba(0, 0, 0, 0.322);
          width: 30%;
          margin-left: auto;

          &:hover {
            background-color: $color-secondary-shade;
            // color: $color-secondary-shade;
            transform: translateY(-3px);
          }
        }
      }
    }
  }
}
</style>