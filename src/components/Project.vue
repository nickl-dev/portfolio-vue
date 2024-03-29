<template>
  <div class="project">
    <div class="project__wrapper">
      <p class="project__title">{{ title }}</p>
      <p class="project__description">{{ description }}</p>
      <p class="project__techStack">{{ techStack }}</p>
      <div class="project__links">
        <a class="project__demo" :href="demo">See Demo</a>
        <a v-if="code" class="project__code" :href="code">See Code</a>
      </div>
    </div>
    <a :href="demo">
      <img
        :src="image"
        class="project__image"
        alt="Image of project"
        loading="lazy"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    techStack: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    demo: {
      type: String,
      required: true
    },
    code: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss">
@import '@/styles/global.scss';

.project {
  @include flexCenter;
  @include flexColumn;
  margin: 70px 0;
  max-width: 500px;
  @include desktop {
    max-width: none;
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
  }

  &__wrapper {
    margin-bottom: 25px;
    width: 100%;
    max-width: 690px;
    @include desktop {
      width: 300px;
      margin: 0;
      padding-right: 30px;
    }
  }

  &__title {
    margin-bottom: 20px;
    font-size: $font20;
    font-weight: 600;
    text-align: start;
    @include tablet {
      font-size: $font24;
    }
  }

  &__description {
    margin-bottom: 15px;
    text-align: start;
    @include tablet {
      font-size: $font18;
    }
  }

  &__techStack {
    text-align: start;
    font-size: $font14;
    font-family: monospace;
    margin-bottom: 15px;
    @include tablet {
      font-size: $font16;
    }
  }

  &__links {
    @include flexCenter;
    justify-content: flex-start;
  }

  &__demo {
    @include demoLink;
    &:hover {
      border-color: $stockBlack;
      background: $stockBlack;
      color: $stockWhite;
    }
  }

  &__code {
    @include codeLink;
  }

  &__image {
    width: 100%;
    margin: auto;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.175);
    transition: 0.1s ease-in-out;
    &:visited {
      @include iconLink;
    }
    &:hover {
      box-shadow: 0 32px 96px rgba(0, 0, 0, 0.3);
    }
    @include desktop {
      margin: 0;
      max-width: 500px;
    }
  }
}
</style>
