<template>
  <div class="contact">
    <h1 class="contact__heading">Contact</h1>
    <p class="contact__thankyou">
      Thank you for viewing my portfolio!
    </p>
    <div class="contact__links">
      <a 
        :href="linkedin" 
        class="contact__link"
      >
        <LinkedInIcon 
          :size="iconSize" 
          class="contact__icon" 
        />
      </a>
      <a 
        :href="github" 
        class="contact__link"
      >
        <GitHubIcon 
          :size="iconSize" 
          class="contact__icon" 
        />
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
    GitHubIcon
  },
  
  data () {
    return {
      iconSize: 45,
      linkedin: "https://www.linkedin.com/in/nicklal/",
      github: "https://github.com/nickl-dev"
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/global.scss";

.contact {
  @include flexCenter;
  @include padding5;
  text-align: center;
  flex-direction: column;
  height: 100vh;

  &__thankyou {
    margin: 5vh 0;
    font-size: $font18;
  }

  &__link {
    @include iconLink;
    margin: 0 10px;
    &:hover { box-shadow: 0 3px 2px -2px rgba($stockBlack, 1); }
  }
}
</style>
