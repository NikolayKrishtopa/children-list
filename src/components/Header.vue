<template>
  <header class="header">
    <container class="container">
      <img
        src="../assets/img/logo.png"
        alt="Логотип компании Alef"
        class="logo"
      />
      <div class="nav">
        <a href="#" class="link">Форма</a>
        <a href="#" class="link">Превью</a>
      </div>
    </container>
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
  methods: {},
  props: {},
});
</script>
<style lang="scss" scoped>
@import '../styles/globalVars.scss';
.header {
  @include flex-row;
  width: 100%;
  background-color: $white;
  padding: 22px $side-padding;
  border-bottom: 1px solid $primary-darkest;
}
.logo {
  justify-self: flex-start;
}
.container {
  @include flex-row;
  justify-content: start;
  width: 100%;
  max-width: $max-width-page;
}
.nav {
  @include flex-row;
  gap: 24px;
  justify-self: center;
}
.link {
  @include text-main(14px, 24px, $primary-darkest);
  opacity: 48%;
}
</style>
