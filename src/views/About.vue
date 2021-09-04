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
    <div class="about__current">
      <h2 class="about__job">Currently: Front End Developer @</h2>
      <a :href="companyLink" target="_blank">
        <img class="about__employer" :src="cd" />
      </a>
    </div>
    <section class="about__wrapper">
      <div class="about__subwrapper">
        <img :src="headshot" alt="Nick Lal" class="about__image" />
        <div class="about__biowrapper">
          <p class="about__bio">
            I love creating things that are visually and functionally smooth.
            Front End Development is where I thrive - especially working with
            frameworks such as Vue and React. I'm passionate about clean UI/UX design
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
import headshot from "@/assets/headshot.jpg";
import cd from "@/assets/cd-logo.jpg";

export default {
  name: "About",

  components: {
    VueTyper,
  },

  data: () => {
    return {
      cd: cd,
      companyLink: 'https://www.canadadrives.ca/',
      headshot: headshot,
      resume: '../nick-lal-resume.pdf'
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/global.scss";

.about {
  &__header {
    @include textCenter;
    @include padding5;
    margin: 35vh 0;
  }
  &__name {
    @include name;
  }
  &__occupation {
    @include occupation;
  }
  &__current {
    @include textCenter;
    @include padding5;
    margin: 50vh 0;
  }
  &__job {
    font-weight: 600;
    font-size: $font20;
  }
  &__employer {
    width: 230px;

    @include tablet {
      width: 300px;
    }
    @include desktop {
      width: 400px;
    }
  }
  &__wrapper {
    background: $stockBlack;
    padding: 50px $padding5;
    @include tablet {
      padding: 75px $padding5;
      margin: 20vh 0;
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
