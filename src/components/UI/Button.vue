<template>
  <button
    type="button"
    :class="{
      bordered: style === 'bordered',
      weak: style === 'weak',
      solid: style === 'solid',
      disabled: disabled,
    }"
  >
    <slot></slot>{{ text }}
  </button>
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
    disabled: {
      type: Boolean,
    },
  },
});
</script>
<style lang="scss" scoped>
@import '../../styles/globalVars.scss';

.bordered {
  @include button(bordered);
  .disabled {
    background-color: grey;
  }
}
.solid {
  @include button(strong);
}
.weak {
  @include button(weak);
}
.solid.disabled {
  background-color: $inactive-bkgnd;
  pointer-events: none;
}
.bordered.disabled {
  border-color: $inactive-bkgnd;
  color: $inactive-bkgnd;
  pointer-events: none;
}
.weak.disabled {
  color: $inactive-bkgnd;
  pointer-events: none;
}
</style>
