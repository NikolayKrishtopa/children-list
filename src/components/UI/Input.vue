<template>
  <label for="name" class="label" :class="{ error: !!error }">
    <p class="error-text">{{ error }}</p>
    <span>{{ title }}</span>
    <input
      type="text"
      :name="attributName"
      class="input"
      :value="modelValue"
      @input="edit"
    />
  </label>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      name: 'comp-input',
      state: {
        currentValue: '',
      },
    };
  },
  methods: {
    edit(e: any) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
  props: {
    error: { type: String },
    attributName: { type: String, required: true },
    title: { type: String, required: true },
    modelValue: [String, Number],
  },
});
</script>
<style lang="scss" scoped>
@import '../../styles/globalVars.scss';
.label {
  @include inputWrapper;
  @include text-main(13px, 16px, $primary-darkest);
  position: relative;
  span {
    opacity: 48%;
  }
}
.input {
  @include text-main(14px, 24px, $black);
  outline: none;
}
.error {
  border-color: $error;
}
.error-text {
  @include text-main(12px, 1, $error);
  position: absolute;
  max-width: 60%;
  top: 5px;
  right: 5px;
}
</style>
