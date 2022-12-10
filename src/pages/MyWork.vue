<template>
  <div class="my-work">
    <h1 class="my-work__heading">My Work</h1>
    <Project
      v-for="project in projects"
      :key="project.index"
      :title="project.title"
      :description="project.description"
      :techStack="project.techStack"
      :image="project.image"
      :demo="project.demo"
      :code="project.code"
    />
  </div>
</template>

<script>
import Project from '@/components/Project.vue';
import GreetingsScreenshot from '@/assets/project-screenshots/greetings-screenshot.png';
import CleanfolioScreenshot from '@/assets/project-screenshots/cleanfolio-screenshot.png';
import MyGradientScreenshot from '@/assets/project-screenshots/mygradient-screenshot.png';
import CanadaDrivesScreenshot from '@/assets/project-screenshots/canadadrives-homepage-2.0-screenshot.png';

export default {
  name: 'MyWork',

  components: { Project },

  data() {
    return {
      projects: [
        {
          title: 'Canada Drives - Homepage 2.0',
          description: 'Canada Drives static website home page 2.0',
          techStack: 'JavaScript, Nuxt, Tailwind, SCSS',
          image: CanadaDrivesScreenshot,
          demo: 'https://www.canadadrives.ca/'
        },
        {
          title: 'Cleanfolio',
          description:
            'Clean and simple portfolio site template for developers',
          techStack: 'JavaScript, Vue, SCSS',
          image: CleanfolioScreenshot,
          demo: 'https://nickl-dev-cleanfolio.netlify.app/',
          code: 'https://github.com/nickl-dev/cleanfolio-vue'
        },
        {
          title: 'Greetings',
          description: 'Social media application',
          techStack:
            'JavaScript, React, Semantic UI, Express, Apollo, GraphQL, MongoDB',
          image: GreetingsScreenshot,
          demo: 'https://nickl-dev-greetings.netlify.app/',
          code: 'https://github.com/nickl-dev/greetings'
        },
        {
          title: 'MyGradient',
          description: 'Dual color gradient generator',
          techStack: 'HTML, SCSS, JavaScript',
          image: MyGradientScreenshot,
          demo: 'https://nickl-dev-mygradient.netlify.app/',
          code: 'https://github.com/nickl-dev/mygradient'
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import '@/styles/global.scss';

.my-work {
  @include flexCenter;
  @include flexColumn;
  @include padding5;
  &__heading {
    margin-top: 150px;
  }
  @include desktop {
    margin-bottom: 30px;
  }
}
</style>
