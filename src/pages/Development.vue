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

import Greetings from "@/assets/project-screenshots/greetings-screenshot.png";
import Cleanfolio from "@/assets/project-screenshots/cleanfolio-screenshot.png";
import MyGradient from "@/assets/project-screenshots/mygradient-screenshot.png";

export default {
  name: "Development",

  components: {
    Project,
  },

  data () {
    return {
      projects: [
        {
          title: "Cleanfolio",
          description: "Clean and simple portfolio site template for developers",
          techStack: "Vue, Sass",
          image: Cleanfolio,
          demo: "https://nlaldevcleanfolio.netlify.app/",
          code: "https://github.com/nlaldev/cleanfolio-vue",
        },
        {
          title: "Greetings",
          description: "Social media application",
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
    margin-top: 150px;
    @include desktop {
      margin-bottom: 30px;
    }
  }
}
</style>
