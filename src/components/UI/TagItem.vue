<template>
  <p class="text" :class="{ filled: filled }">{{ text }}</p>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      name: 'tag-item',
    };
  },
  props: {
    filled: {
      type: Boolean,
      default: true,
    },
    text: {
      type: String,
      resuired: true,
    },
  },
});
</script>
<style lang="scss" scoped>
@import '../../styles/globalVars.scss';
.text {
  @include section-title;
  font-weight: 700;
  border-radius: 5px;
  padding: 0;
}
.filled {
  background-color: $items-dark;
  padding: 10px 20px;
}
</style>
