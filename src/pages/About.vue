<template>
  <div class="about">
    <header class="about__header">
      <h1 class="about__name">Hi, I'm Nick</h1>
      <div class="about__occupation-wrapper">
        <h2 class="about__occupation">I'm a Software Developer</h2>
      </div>
    </header>

    <section class="about__bio-wrapper">
      <p class="about__bio">
        I’m a collaborative Software Developer experienced in building clean,
        responsive, performant web applications. Comfortable in an agile
        environment, working closely with Product Managers/Owners, Designers,
        Developers/Engineers, and QA to design and develop impactful solutions,
        as well as translate user and business needs into clean, efficient,
        reusable code. I’m most passionate about learning, problem-solving,
        clean design, and I love to take ownership of the entire development
        process from start to finish to deliver my best work.
      </p>
      <a :href="resume" class="about__resume" target="_blank"> Resume </a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      resume: '../nick-lal-resume.pdf'
    };
  }
};
</script>

<style lang="scss">
@import '@/styles/global.scss';

@keyframes type {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.about {
  &__header {
    @include padding5;
    text-align: center;
    margin-top: 40vh;
  }

  &__name {
    font-size: 40px;
    @include tablet {
      font-size: 70px;
    }
    @include desktop {
      font-size: 100px;
    }
  }

  &__occupation {
    overflow: hidden;
    white-space: nowrap;
    animation: type 1.5s forwards;
    font-size: $font20;
    font-weight: 600;
    margin: 20px auto 0 auto;
    @include tablet {
      font-size: 25px;
    }
    &-wrapper {
      display: inline-block;
    }
  }

  &__bio-wrapper {
    background: $stockBlack;
    padding: 50px $padding5;
    margin-top: 45vh;
    text-align: center;
    @include tablet {
      padding: 75px $padding5;
    }
  }

  &__bio {
    max-width: 600px;
    color: $stockWhite;
    font-size: $font16;
    margin: 20px auto 30px auto;
  }

  &__resume {
    @include button;
    display: inline-block;
    &:hover {
      border-color: $stockWhite;
      background: $stockWhite;
      color: $stockBlack;
    }
  }
}
</style>
