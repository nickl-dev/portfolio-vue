<template>
  <div class="about">
    <header class="about__header">
      <h1 class="about__name">Hi, I'm Nick</h1>
      <vue-typer
        class="about__occupation"
        text="I'm a Web Developer 🚀"
        :repeat="0"
      ></vue-typer>
    </header>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  name: "About",

  components: {
    VueTyper,
  },
};
</script>

<style lang="scss">
@import "@/styles/mixins.scss";

.about {
  &__header {
    margin: 30vh 0;
    text-align: center;
  }
  &__name {
    @include name;
  }
  &__occupation {
    @include occupation;
  }
}
</style>
