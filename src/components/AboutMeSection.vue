<template>
  <section class="about-section" id="about-me">
    <base-width>
      <div class="section-header">
        <p>About</p>
        <h1>Who is Cristina Kelly?</h1>
      </div>

      <div class="about-section--container">
        <div class="about-section--image">
          <img src="@/assets/images/cristina-img.jpeg" alt="Cristina's photo" />
        </div>
        <div class="about-section--text">
          <p>
            From Brazil and with a pharmacist brazilian degree, I found my passion for web
            development when I moved to the Netherlands three years ago, I've immersed myself in the
            world of coding, transitioning from the pharmaceutical realm to the dynamic landscape of
            web development as a self-taught student.

            <br />
            <br />

            Right now I am living in Leiden - The Netherlands, and working as a freelancer, where I
            have the freedom to bring my clients' ideas to life through code. Whether it's crafting
            sleek websites, optimizing user experiences, or solving complex technical challenges, I
            thrive on the creativity and problem-solving that coding offers.
            <br />
            <br />

            Besides that, my goal is to embrace a new challenge, so I am looking for an opportunity
            to bring my skills and enthusiasm to a forward-thinking company. I'm eagerly seeking
            opportunities to contribute to a dynamic team.
            <br />
            <br />
            If you're in search of a dedicated developer with a passion for continuous learning and
            that love a challenge, I'd love to connect! I'm always up for a chat and eager to
            explore how I can contribute to your team. Let's build something great together!
          </p>
        </div>
      </div>
      <div class="button">
        <button>Download CV</button>
      </div>
    </base-width>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.about-section {
  background-color: $color-primary;
  padding: pxToRem(100) pxToRem(40);

  &--container {
    padding-top: pxToRem(100);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
}

.about-section--image {
  flex: 0 1 20%;
  width: pxToRem(350);
  position: relative;
  z-index: 100;

  img {
    position: relative;

    z-index: 1;
  }

  &::after {
    content: '';
    height: 100%;
    width: 100%;
    border: 4px solid $dark-green;
    position: absolute;
    top: -15px;
    right: -15px;
  }
}

.about-section--text {
  flex: 0 1 70%;
  text-align: justify;
  background-color: $light-green;
  padding: pxToRem(15);
  border-radius: pxToRem(5);
  box-shadow: 4px 4px 18.5px rgba(#000, 0.25);
}

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

.button {
  text-align: end;
  display: block;
  margin-top: 40px;
}

button {
  border: 1px solid $dark-green;
  padding: pxToRem(8) pxToRem(10);
  color: $dark-green;
  font-weight: 500;
  background-color: $light-green;
  border-radius: pxToRem(5);
  box-shadow: 0 pxToRem(2) pxToRem(0) 0 $greyish-green;
  font-size: inherit;
  cursor: pointer;
}

@include media-query($laptop-medium) {
  .about-section--container {
    flex-direction: column;
    gap: pxToRem(40);
  }
}

@include media-query($mobile-large) {
  .about-section {
    padding: pxToRem(40) 0;

    &--container {
      padding-top: pxToRem(60);
    }
  }

  .about-section--image {
    width: pxToRem(250);
  }
}
</style>
