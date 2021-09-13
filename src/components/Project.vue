<template>
  <div class="project">
    <div class="project__wrapper">
      <p class="project__title">{{ title }}</p>
      <p class="project__description">{{ description }}</p>
      <p class="project__techStack">{{ techStack }}</p>
      <div class="project__links">
        <a class="project__demo" :href="demo">See Demo</a>
        <a class="project__code" :href="code">See Code</a>
      </div>
    </div>
    <a :href="demo">
      <img class="project__image" :src="image" />
    </a>
  </div>
</template>

<script>
export default {
  // Name
  name: "Project",

  // Props
  props: {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    techStack: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    demo: {
      type: String,
      required: true,
    },

    code: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/global.scss";

.project {
  @include flexCenter;
  @include flexColumn;
  margin: 70px 0;

  @include desktop {
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
  }

  &__wrapper {
    margin-bottom: 25px;
    width: 100%;
    max-width: 690px;

    @include tablet {
      margin-bottom: 50px;
    }

    @include desktop {
      width: 350px;
      margin: 0;
    }
  }

  &__title {
    @include projectTitle;
  }

  &__description {
    margin-bottom: 15px;
    @include projectSubtext;
  }

  &__techStack {
    margin-bottom: 15px;
    font-style: italic;
    @include projectSubtext;
  }

  &__links {
    @include flexCenter;
    justify-content: flex-start;
  }

  &__demo {
    @include demoLink;
    &:hover {
      @include invertToBlack;
    }
  }

  &__code {
    @include codeLink;
  }

  &__image {
    width: 100%;
    margin: auto;
    max-width: 690px;
    border-radius: 5px;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.175);
    transition: 0.1s ease-in-out;

    &:visited {
      @include iconLink;
    }

    &:hover {
      box-shadow: 0 32px 96px rgba(0, 0, 0, 0.3);
    }

    @include desktop {
      width: 660px;
      margin: 0;
    }
  }
}
</style>
