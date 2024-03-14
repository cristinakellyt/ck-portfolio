<template>
  <section class="skills-section">
    <base-width>
      <section-header subHeadingColor="white">
        <template v-slot:heading> skills & tools </template>
        <template v-slot:subheading> My Toolbox and things I can do </template>
      </section-header>

      <div class="skills-grid">
        <div class="skill-item">
          <img src="@/assets/icons/html.svg" />
          <p>HTML</p>
        </div>
        <div class="skill-item">
          <img src="@/assets/icons/css.svg" />
          <p>CSS</p>
        </div>
        <div class="skill-item">
          <img src="@/assets/icons/scss.svg" />
          <p>SCSS</p>
        </div>
        <div class="skill-item">
          <img src="@/assets/icons/javascript.svg" />
          <p>Javascript</p>
        </div>
        <div class="skill-item">
          <img src="@/assets/icons/typescript.svg" />
          <p>Typescript</p>
        </div>
        <div class="skill-item">
          <img src="@/assets/icons/vue.svg" />
          <p>Vue3.js</p>
        </div>
        <div class="skill-item">
          <img src="@/assets/icons/screens.svg" />
          <p>Responsive Designs</p>
        </div>
        <div class="skill-item">
          <img src="@/assets/icons/node.svg" />
          <p>Node.js</p>
        </div>
        <div class="skill-item">
          <img src="@/assets/icons/git.svg" />
          <p>Git</p>
        </div>
        <div class="skill-item">
          <img src="@/assets/icons/api.svg" />
          <p>RESTful API</p>
        </div>
      </div>
    </base-width>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.skills-section {
  background-color: $color-secondary;
  padding: pxToRem(100) pxToRem(40);
}

.skills-grid {
  margin: pxToRem(60) 0;
  display: grid;
  row-gap: pxToRem(70);
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(pxToRem(250), 1fr));
  img {
    width: pxToRem(100);
    height: pxToRem(100);
  }
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: max-content;
  gap: pxToRem(10);
  font-weight: 500;
  transition: all 0.3s;

  p {
    transition: all 0.3s;
    opacity: 0.7;
    font-size: pxToRem(20);
  }
}

@include media-query($tablet) {
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(pxToRem(200), 1fr));
  }
}

@include media-query($mobile-large) {
  .skills-section {
    padding: pxToRem(40) 0;
  }
  .skills-grid {
    row-gap: pxToRem(20);
    grid-template-columns: repeat(auto-fit, minmax(pxToRem(130), 1fr));
    img {
      width: pxToRem(70);
      height: pxToRem(70);
    }
  }
  .skill-item {
    p {
      font-size: pxToRem(18);
    }
  }
}
</style>
