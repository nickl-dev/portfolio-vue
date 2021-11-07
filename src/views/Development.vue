<template>
  <div class="development">
    <h1 class="development__heading">DEVELOPMENT</h1>
    <Project
      v-for="project in projects"
      v-bind:key="project.index"
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

// Project screenshots
import Greetings from "@/assets/project-screenshots/greetings-screenshot.png";
import Cleanfolio from "@/assets/project-screenshots/cleanfolio-screenshot.png";
import MyGradient from "@/assets/project-screenshots/mygradient-screenshot.png";

export default {
  // Name
  name: "Development",

  // Components
  components: {
    Project,
  },

  // Data
  data: () => {
    return {
      projects: [
        {
          title: "Cleanfolio",
          description: "Clean and simple portfolio site template for developers",
          techStack: "Vue, SASS",
          image: Cleanfolio,
          demo: "https://cleanfolio.netlify.app/",
          code: "https://github.com/nlaldev/cleanfolio-vue",
        },
        {
          title: "Greetings",
          description: "Social media app optimized for desktop",
          techStack: "React, Semantic UI, Express, GraphQL, MongoDB",
          image: Greetings,
          demo: "https://nlaldevgreetings.netlify.app/",
          code: "https://github.com/nlaldev/greetings",
        },
        {
          title: "MyGradient",
          description: "Dual color gradient generator",
          techStack: "HTML, CSS, JavaScript",
          image: MyGradient,
          demo: "https://nlaldevmygradient.netlify.app/",
          code: "https://github.com/nlaldev/mygradient",
        }
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/global.scss";

.development {
  @include flexCenter;
  @include flexColumn;
  @include padding5;
  &__heading {
    margin-top: 10vh;
    @include desktop {
      margin: 10vh 0;
    }
  }
}
</style>
