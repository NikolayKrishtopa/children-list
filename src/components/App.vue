<template>
  <comp-header />
  <router-view></router-view>
  <comp-footer />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
@import '../styles/globalVars.scss';
</style>
