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
    <section class="about__wrapper">
      <div class="about__subwrapper">
        <img :src="headshot" alt="Nick Lal" class="about__image" />
        <div>
          <p class="about__bio">
            I love creating things that are visually and functionally smooth.
            Front End Development is where I thrive - especially working with
            Front End frameworks such as Vue and React. I'm passionate about UI,
            debugging and finding new ways to solve new problems. I use my
            skills to work with a great team on great projects while learning
            something new every day.
            <a :href="resume" class="about__resume" target="_blank">Resume</a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";
import headshot from "@/assets/headshot.jpg";

export default {
  name: "About",

  components: {
    VueTyper,
  },

  data: () => {
    return {
      headshot: headshot,
      resume: require("../../public/nick-lal-webdev-resume.pdf"),
    };
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
  &__wrapper {
    background: $stockBlack;
    padding: 50px 5%;
    @include tablet {
      padding: 75px 10%;
    }
    @include desktop {
      padding: 100px 13%;
    }
  }
  &__subwrapper {
    text-align: center;
    @include tablet {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &__image {
    width: 90%;
    max-width: 300px;
    margin: 0 auto;
    border-radius: 5px;
  }
  &__bio {
    margin: 30px 0;
    @include bio;
  }
}
</style>
