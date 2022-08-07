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
        <img :src="portrait" alt="Portrait of Nick Lal" class="about__image" />
        <div class="about__biowrapper">
          <p class="about__bio">
            I’m a collaborative Software Developer experienced in building clean, 
            responsive and accessible web applications.
            Comfortable in an agile environment, working closely with UI/UX designers to combine 
            function and form and producing a pixel perfect product. I’m most passionate about learning, 
            problem solving and clean design.
            Always seeking the opportunity to level up and work with great people on great projects.
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
import { VueTyper } from "vue-typer"
import portrait from "@/assets/nick-lal-portrait.jpg"

export default {
  name: "About",

  components: { VueTyper },

  data () {
    return {
      portrait: portrait,
      resume: '../nick-lal-resume.pdf'
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/global.scss";

.about {
  &__header {
    @include textCenter;
    @include padding5;
    margin-top: 40vh;
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
    margin-top: 40vh;

    @include tablet {
      padding: 75px $padding5;
      margin-bottom: 8vh;
    }

    @include desktop {
      padding: 100px 13%;
      margin-bottom: 10vh;
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
