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
import Greetings from "@/assets/project-screenshots/greetings-screenshot.png";
import Cleanfolio from "@/assets/project-screenshots/cleanfolio-screenshot.png";
import MyGradient from "@/assets/project-screenshots/mygradient-screenshot.png";

export default {
  name: "Development",

  components: {
    Project,
  },

  data: () => {
    return {
      projects: [
        {
          title: "Greetings",
          description: "Social media app optimized for desktop",
          techStack:
            "Built with React, Semantic UI, Express, GraphQL and MongoDB",
          image: Greetings,
          demo: "https://nlaldevgreetings.netlify.app/",
          code: "https://github.com/nlaldev/greetings",
        },
        {
          title: "Cleanfolio",
          description: "Minimal portfolio site template for developers",
          techStack: "Built with React and SASS",
          image: Cleanfolio,
          demo: "https://cleanfolio.netlify.app/",
          code: "https://github.com/nlaldev/cleanfolio",
        },
        {
          title: "MyGradient",
          description: "Dual color gradient generator",
          techStack: "Built with HTML, CSS and JavaScript",
          image: MyGradient,
          demo: "https://nlaldevmygradient.netlify.app/",
          code: "https://github.com/nlaldev/mygradient",
        },
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
