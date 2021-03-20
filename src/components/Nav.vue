<template>
  <nav class="nav">
    <router-link class="nav__link" active-class="nav__link--active" to="/"
      ><PersonIcon title="About Me" :size="iconSize" class="nav__icon"
    /></router-link>
    <router-link
      class="nav__link"
      active-class="nav__link--active"
      to="/development"
      ><CodeIcon title="My Work" :size="iconSize" class="nav__icon"
    /></router-link>
    <router-link
      class="nav__link"
      active-class="nav__link--active"
      to="/contact"
      ><MailIcon title="Contact Me" :size="iconSize" class="nav__icon"
    /></router-link>
  </nav>
</template>

<script>
import PersonIcon from "vue-material-design-icons/Account.vue";
import CodeIcon from "vue-material-design-icons/Xml.vue";
import MailIcon from "vue-material-design-icons/Email.vue";

export default {
  name: "Nav",

  components: {
    PersonIcon,
    CodeIcon,
    MailIcon,
  },

  data: () => {
    return {
      iconSize: 40,
    };
  },
};
</script>

<style lang="scss">
.nav {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__icon {
    margin: 0 20px;
    color: #323232;
  }
}
</style>
