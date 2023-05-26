<template>
  <form :class="{ userForm: type === 'user', kidForm: type === 'kid' }">
    <label for="name" class="label">
      <span>Имя</span>
      <input
        type="text"
        name="name"
        class="input"
        v-model="state.name"
        @input="edit"
      />
    </label>
    <label for="age" class="label">
      <span>Возраст</span>
      <input
        type="text"
        name="age"
        class="input"
        v-model="state.age"
        @input="edit"
      />
    </label>
    <button v-if="type === 'kid'" class="button" @click="remove">
      Удалить
    </button>
  </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { User, Kid } from '../models/models';

export default defineComponent({
  data() {
    return {
      name: 'comp-form',
      state: {
        name: this.data?.name,
        age: this.data?.age,
        id: this.data?.id,
      } as User | Kid,
    };
  },
  methods: {
    edit() {
      this.$emit('edit', this.state);
    },
    remove() {
      this.$emit('delete', this.state);
    },
  },
  props: {
    type: { type: String, required: true },
    data: { type: Object },
  },
});
</script>
<style lang="scss" scoped>
@import '../styles/globalVars.scss';

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
.button {
  @include button(weak);
}
</style>
