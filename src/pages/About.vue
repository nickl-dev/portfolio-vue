<template>
  <div class="about">
    <header class="about__header">
      <h1 class="about__name">Hi, I'm Nick</h1>
      <vue-typer
        class="about__occupation"
        text="I'm a Developer 🚀"
        :repeat="0"
      >
      </vue-typer>
    </header>

    <section class="about__wrapper">
      <div class="about__subwrapper">
        <img :src="personalPicture" alt="Nick Lal" class="about__image" />
        <div class="about__biowrapper">
          <p class="about__bio">
            I love creating things that are visually and functionally smooth.
            Front End Development is where I thrive - especially working with
            frameworks such as Vue and React. I'm passionate about clean UX/UI design
            and finding new ways to solve new problems.
            My main focus as a developer is to always be learning
            and working with great people on great projects.
          </p>
          <a
            :href="resume"
            class="about__resume"
            target="_blank"
          >
          Resume
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";
import personalPicture from "@/assets/personal-picture.jpg";

export default {
  name: "About",

  components: {
    VueTyper,
  },

  data () {
    return {
      personalPicture: personalPicture,
      resume: '../nick-lal-resume.pdf'
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/global.scss"

.about {
  &__header {
    @include textCenter;
    @include padding5;
    margin: 37vh 0;
  }

  &__name {
    @include name;
  }

  &__occupation {
    @include occupation;
  }

  &__wrapper {
    background: $stockBlack;
    padding: 50px $padding5;

    @include tablet {
      padding: 75px $padding5;
      margin-bottom: 17.5vh;
    }

    @include desktop {
      padding: 100px 13%;
    }
  }

  &__subwrapper {
    @include textCenter;

    @include tablet {
      @include flexCenter;
      justify-content: space-evenly;
    }
  }

  &__biowrapper {
    max-width: 550px;
    margin: auto;

    @include tablet {
      width: 50%;
    }
  }

  &__image {
    @include headshot;
  }

  &__bio {
    @include bio;
  }

  &__resume {
    @include button;
    font-size: $font20;
    display: inline-block;

    &:hover {
      @include invertToWhite;
    }
  }
}
</style>
