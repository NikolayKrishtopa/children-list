<template>
  <button type="button" :class="style"><slot></slot>{{ text }}</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      name: 'comp-button',
    };
  },
  props: {
    style: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
@import '../../styles/globalVars.scss';

.bordered {
  @include button(bordered);
}
.solid {
  @include button(strong);
}
.weak {
  @include button(weak);
}
</style>
