<template>
  <section class="about-section" id="about-me">
    <base-width>
      <section-header>
        <template v-slot:heading> About </template>
        <template v-slot:subheading> Who is Cristina Kelly? </template>
      </section-header>

      <div class="about-section--container">
        <div class="about-section--image">
          <img src="@/assets/images/cristina-picture.webp" alt="Cristina's photo" />
        </div>
        <base-card class="about-section--text">
          <p>
            From Brazil and with a pharmacist brazilian degree, I found my passion for web
            development when I moved to the Netherlands three years ago, I've immersed myself in the
            world of coding, transitioning from the pharmaceutical realm to the dynamic landscape of
            web development as a self-taught student.

            <br />
            <br />

            I had the opportunity to do an internship at <a>DTT - multimedia</a>, where I gain
            valuable knowledege and experience in the field. Right now I am living in Leiden - The
            Netherlands, and working as a freelancer, where I have the freedom to bring my clients'
            ideas to life through code.
            <br />
            <br />

            My goal is to embrace a new challenge, so I am looking for an opportunity to bring my
            skills and enthusiasm to a forward-thinking company. I'm eagerly seeking opportunities
            to contribute to a dynamic team.
            <br />
            <br />
            If you're in search of a dedicated developer with a passion for continuous learning and
            that love a challenge, I'd love to connect! I'm always up for a chat and eager to
            explore how I can contribute to your team!
          </p>
        </base-card>
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
  flex: 0 1 30%;
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
    border: pxToRem(4) solid $color-secondary-shade;
    position: absolute;
    top: pxToRem(-15);
    right: pxToRem(-15);
  }
}

.about-section--text {
  flex: 0 1 60%;
  text-align: justify;
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
