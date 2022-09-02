<template>
  <div class="development">
    <h1 class="development__heading">DEVELOPMENT</h1>
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
import Project from "@/components/Project.vue";
import GreetingsScreenshot from "@/assets/project-screenshots/greetings-screenshot.png";
import CleanfolioScreenshot from "@/assets/project-screenshots/cleanfolio-screenshot.png";
import MyGradientScreenshot from "@/assets/project-screenshots/mygradient-screenshot.png";
import CanadaDrivesScreenshot from '@/assets/project-screenshots/canadadrives-homepage-2.0-screenshot.png';
import AutoCreditDealsScreenshot from '@/assets/project-screenshots/autocreditdeals-site-2.0-screenshot.png'

export default {
  name: "Development",

  components: { Project },

  data () {
    return {
      projects: [
        {
          title: 'Canada Drives - Homepage 2.0',
          description: 'Canada Drives static website home page 2.0',
          techStack: 'Nuxt, JavaScript, Tailwind, Sass',
          image:CanadaDrivesScreenshot,
          demo: 'https://www.canadadrives.ca/',
          code: 'https://www.canadadrives.ca/'
        },
        {
          title: 'Auto Credit Deals - Website 2.0',
          description: 'Auto Credit Deals static website 2.0',
          techStack: 'Nuxt, JavaScript, Tailwind, Sass',
          image: AutoCreditDealsScreenshot,
          demo: 'https://autocreditdeals.ca/',
          code: 'https://autocreditdeals.ca/'
        },
        {
          title: "Cleanfolio",
          description: "Clean and simple portfolio site template for developers",
          techStack: "Vue, Sass",
          image: CleanfolioScreenshot,
          demo: "https://nlaldevcleanfolio.netlify.app/",
          code: "https://github.com/nickl-dev/cleanfolio-vue"
        },
        {
          title: "Greetings",
          description: "Social media application",
          techStack: "React, Semantic UI, Express, GraphQL, MongoDB",
          image: GreetingsScreenshot,
          demo: "https://nlaldevgreetings.netlify.app/",
          code: "https://github.com/nickl-dev/greetings"
        },
        {
          title: "MyGradient",
          description: "Dual color gradient generator",
          techStack: "HTML, Sass, JavaScript",
          image: MyGradientScreenshot,
          demo: "https://nlaldevmygradient.netlify.app/",
          code: "https://github.com/nickl-dev/mygradient"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/global.scss";

.development {
  @include flexCenter;
  @include flexColumn;
  @include padding5;
  &__heading {
    margin-top: 150px;
    @include desktop {
      margin-bottom: 30px;
    }
  }
}
</style>
