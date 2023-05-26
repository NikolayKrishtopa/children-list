<template>
  <header class="header">
    <div class="container">
      <img
        src="../assets/img/logo.png"
        alt="Логотип компании Alef"
        class="logo"
      />
      <div class="nav">
        <router-link to="/" class="link">Форма</router-link>
        <router-link to="/preview" class="link">Превью</router-link>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      name: 'comp-header',
    };
  },
});
</script>
<style lang="scss" scoped>
@import '../styles/globalVars.scss';
.header {
  @include flex-row;
  width: 100%;
  background-color: $white;
  padding: 22px $side-padding;
  border-bottom: 1px solid #11111110;
  @media screen and (max-width: $breakpoint-mobile-big) {
    padding: 20px;
  }
}
.logo {
  justify-self: flex-start;
}
.container {
  @include flex-row;
  justify-content: start;
  width: 100%;
  max-width: $max-width-page;
  @media screen and (max-width: $breakpoint-mobile-big) {
    justify-content: space-between;
  }
}
.nav {
  @include flex-row;
  gap: 24px;

  @media screen and (max-width: $breakpoint-mobile-big) {
    justify-content: flex-end;
  }
}
.link {
  @include text-main(14px, 24px, $primary-darkest);
  text-decoration: none;
  opacity: 48%;
}
</style>
