<template>
  <div class="project">
    <p class="project__title">{{ title }}</p>
    <p class="project__description">{{ description }}</p>
    <p class="project__techStack">{{ techStack }}</p>
    <img class="project__image" :src="image" />
    <div class="project__links">
      <a class="project__demo" :href="demo">See Demo</a>
      <a class="project__code" :href="code">See Code</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",

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
@import "@/styles/mixins.scss";

.project {
  @include flexCenter;
  flex-direction: column;
  margin: 20px 0;
  &__title {
    @include desktop {
      font-size: 24px;
    }
  }
  &__description {
    font-weight: bold;
  }
  &__image {
    width: 200px;
  }
  &__links {
    @include flexCenter;
  }
  &__demo {
    @include demoLink;
    &:hover {
      @include invertToBlack;
    }
  }
  &__code {
    @include link;
    transition: 0.1s ease-in-out;
    &:hover {
      margin-left: 5px;
    }
  }
}
</style>
