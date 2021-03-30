<template>
  <div class="contact">
    <h1 class="contact__heading">CONTACT</h1>
    <p class="contact__thankyou">
      Thank you for taking the time to view my portfolio.
    </p>
    <div class="contact__links">
      <a :href="linkedin" class="contact__link">
        <LinkedInIcon :size="iconSize" />
      </a>
      <a :href="github" class="contact__link">
        <GitHubIcon :size="iconSize" />
      </a>
    </div>
  </div>
</template>

<script>
import LinkedInIcon from "vue-material-design-icons/Linkedin.vue";
import GitHubIcon from "vue-material-design-icons/Github.vue";

export default {
  name: "Contact",

  components: {
    LinkedInIcon,
    GitHubIcon,
  },

  data: () => {
    return {
      iconSize: 45,
      linkedin: "https://www.linkedin.com/in/nicklal/",
      github: "https://github.com/nlaldev",
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/mixins.scss";

.contact {
  @include flexCenter;
  @include textCenter;
  flex-direction: column;
  height: 90vh;
  padding: 0 5%;
  &__thankyou {
    margin: 5vh 0;
    font-weight: bold;
  }
  &__link {
    margin: 0 10px;
    @include iconLink;
  }
}
</style>
