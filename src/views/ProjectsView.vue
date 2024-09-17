<template>
  <div class="projects-view">
    <base-width>
      <div class="project-wrapper">
        <h1 class="title">Projects</h1>
        <p>Here are some of the projects I have worked on.</p>
      </div>
      <div class="projects">
        <ProjectCard
        v-for="(project, index) in projectCardContent"
        :key="project.name"
        :name="project.name"
        :description="project.description"
        :website="project.website"  
        :repoUrl="project.repoUrl"
        :image="project.image"
        :isInverted="index % 2 !== 0 ? true : false"
        />
      </div>
  </base-width>
</div>

</template>
<script setup lang="ts">
import ProjectCard from '@/components/ProjectsCard.vue'
import projectCardContent from '@/constants/ProjectsContent.js'

</script>

<style scoped lang="scss">
  @import '@/assets/scss/main.scss';

  .projects-view {
    background-color: $color-primary;
    width: 100%;
    padding: pxToRem(20);
    }

  .project-wrapper {
    padding: pxToRem(20);

    .title {
      font-weight: 500;
      color: $color-text;
      margin-bottom: pxToRem(16);
    }
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(pxToRem(350), 1fr));
    gap: pxToRem(32);
    padding: pxToRem(20);
    width: 100%;
    }

    @include media-query($tablet) {
      .projects {
        grid-template-columns: repeat(auto-fill, minmax(pxToRem(250), 1fr));
        gap: pxToRem(16);
        padding: 0;
      }
    }

    @include media-query($mobile-large) {
      .project-wrapper{
        padding-top: 0;
      }
      .projects-view {
        margin-top: 80px;
       padding: 0;
      }
      .projects {
        grid-template-columns: repeat(auto-fill, minmax(pxToRem(200), 1fr));
        gap: pxToRem(24);
        padding: 0;
      }
    }
</style> 