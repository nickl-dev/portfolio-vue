<template>
  <div class="about">
    <header class="about__header">
      <h1 class="about__name">Hi, I'm Nick</h1>
      <div class="about__occupation-wrapper">
        <h2 class="about__occupation">I'm a Software Developer</h2>
      </div>
    </header>

    <section class="about__wrapper">
      <div class="about__subwrapper">
        <img
          :src="portrait"
          alt="Portrait of Nick Lal"
          class="about__image"
          loading="lazy"
        />
        <div class="about__biowrapper">
          <p class="about__bio">
            I’m a collaborative Software Developer experienced in building
            clean, responsive and accessible web applications. Comfortable in an
            agile environment, working closely with Product Managers/Owners,
            Designers, and QA to design and develop high-quality, pixel-perfect
            solutions, as well as translate user and business needs into clean,
            efficient, reusable code. I’m most passionate about learning,
            problem solving and clean design. Always seeking the opportunity to
            level up and work with great people on great projects.
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
import portrait from "@/assets/nick-lal-portrait.jpg"

export default {
  name: "About",
  data() {
    return {
      portrait: portrait,
      resume: "../nick-lal-resume.pdf"
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/global.scss";

@keyframes type {
  from { width: 0; }
  to { width: 100%; }
}

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
    &-wrapper {
      display: inline-block;
    }
    @include occupation;
    overflow: hidden;
    white-space: nowrap;
    animation: type 1.5s forwards;
  }

  &__wrapper {
    background: $stockBlack;
    padding: 50px $padding5;
    margin-top: 43vh;

    @include tablet {
      padding: 75px $padding5;
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
