<template>
  <form :class="{ userForm: type === 'user', kidForm: type === 'kid' }">
    <label for="name" class="label">
      <span>Имя</span>
      <input
        type="text"
        name="name"
        class="input"
        v-model="state.name"
        @input="$emit('edit', state)"
      />
    </label>
    <label for="age" class="label">
      <span>Возраст</span>
      <input
        type="text"
        name="age"
        class="input"
        v-model="state.age"
        @input="$emit('edit', state)"
      />
    </label>
    <button v-if="type === 'kid'" class="button">Удалить</button>
  </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { User, FormType } from '../models/models';

export default defineComponent({
  data() {
    return {
      name: 'comp-form',
      state: {
        name: this.data?.name,
        age: this.data?.age,
      } as User,
    };
  },
  methods: {},
  props: {
    type: { type: String, required: true },
    data: { type: Object },
  },
});
</script>
<style lang="scss">
@import '../styles/globalVars.scss';
.title {
  @include section-title;
}
.userForm {
  @include flex-column;
  gap: $vertical-gap;
}
.kidForm {
  @include flex-row;
  gap: $horizontal-gap;
}
.label {
  @include inputWrapper;
  @include text-main(13px, 16px, $primary-darkest);
  span {
    opacity: 48%;
  }
}
.input {
  @include text-main(14px, 24px, $black);
  outline: none;
}
</style>
