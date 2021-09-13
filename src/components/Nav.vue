<template>
  <nav class="nav">
    <router-link
      class="nav__link"
      active-class="nav__link--active"
      exact to="/"
    >
      <PersonIcon
        title="About Me"
        :size="iconSize"
      />
    </router-link>

    <router-link
      class="nav__link"
      active-class="nav__link--active"
      to="/development"
    >
      <CodeIcon
        title="My Work"
        :size="iconSize"
      />
    </router-link>

    <router-link
      class="nav__link"
      active-class="nav__link--active"
      to="/contact"
    >
      <MailIcon
        title="Contact Me"
        :size="iconSize"
      />
    </router-link>
  </nav>
</template>

<script>
import PersonIcon from "vue-material-design-icons/Account.vue";
import CodeIcon from "vue-material-design-icons/Xml.vue";
import MailIcon from "vue-material-design-icons/Email.vue";

export default {
  // Name
  name: "Nav",

  // Components
  components: {
    PersonIcon,
    CodeIcon,
    MailIcon,
  },

  // Data
  data: () => {
    return {
      iconSize: 40,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/global.scss";

.nav {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 3px -2px rgba($stockBlack, 0.3);

  &__link {
    @include iconLink;
    margin: 0 20px;
    transition: $transition;

    &:hover {
      box-shadow: 0 3px 2px -2px rgba($stockBlack, 1);
    }

    &--active {
      box-shadow: 0 3px 2px -2px rgba($stockBlack, 0.5);
    }
  }
}
</style>
