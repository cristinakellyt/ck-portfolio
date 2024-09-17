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
            <a href="https://github.com/cristinakellyt">
              <img src="@/assets/icons/github.svg" alt="contact-github" />
            </a>
            <a href="https://www.linkedin.com/in/cristina-gaiao/">
              <img src="@/assets/icons/linkedin.svg" alt="contact-linkedin" />
            </a>
            
          </div>
        </div>
        <div class="contact-page--form">
          <form class="form" action="https://formspree.io/f/xwpejjgl" method="POST">
            <div class="form-group">
              <input class="form-input" id="name" type="text" placeholder="Your name" name="name" required />
              <label class="form-label" for="name"> Your name </label>
            </div>
            <div class="form-group">
              <input class="form-input" id="email" type="email" placeholder="Your e-mail" name="email" required />
              <label class="form-label" for="email"> Your e-mail </label>
            </div>
            <div class="form-group">
              <textarea class="form-textarea"
               id="message"
               placeholder="Message"
               name="message"
               required
               rows="5" />
              <label class="form-label" for="message"> Message </label>
            </div>
            
            <base-button class="submit-button" type="submit"> Send e-mail</base-button>
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

        .submit-button {
          width: 25%;
          margin-left: auto
        }
      }
    }
  }
}


@include media-query($tablet) {
  .contact-page {
    
    
    .contact-page--content {
      grid-template-columns: 1fr;
      gap: pxToRem(48);

      .contact-page--form{
        .form .submit-button {
          width: 100%;
        }
      }
    }
  }
}

@include media-query($mobile-large) {
  .contact-page {
    padding: 0;
  }
}
</style>