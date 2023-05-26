<template>
  <section class="wrapper">
    <h2 class="title">{{ title }}</h2>
    <slot></slot>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      name: 'comp-section',
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
@import '../../styles/globalVars.scss';

.wrapper {
  @include flex-column;
  align-items: flex-start;
  gap: 20px;
}
.title {
  @include section-title;
}
</style>
