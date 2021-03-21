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
    <div class="about__current">
      <h2 class="about__job">Currently: Front End Developer @</h2>
      <img class="about__employer" :src="cd" />
    </div>
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
          </p>
          <a href="https://www.google.ca" class="about__resume" target="_blank"
            >Resume</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";
import headshot from "@/assets/headshot.jpg";
import cd from "@/assets/cd-logo.jpg";

export default {
  name: "About",

  components: {
    VueTyper,
  },

  data: () => {
    return {
      headshot: headshot,
      cd: cd,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/mixins.scss";

.about {
  &__header {
    margin: 35vh 0;
    @include centerText;
  }
  &__name {
    @include name;
  }
  &__occupation {
    @include occupation;
  }
  &__current {
    @include centerText;
    margin: 50vh 0;
  }
  &__employer {
    width: 50%;
    max-width: 400px;
  }
  &__wrapper {
    background: $stockBlack;
    padding: 50px 5%;
    @include tablet {
      padding: 75px 10%;
      margin-bottom: 20vh;
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
    @include bio;
  }
  &__resume {
    font-size: 20px;
    display: inline-block;
    @include button;
    &:hover {
      @include invertToWhite;
    }
  }
}
</style>
