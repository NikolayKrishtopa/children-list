<template>
  <form :class="{ userForm: type === 'user', kidForm: type === 'kid' }">
    <comp-input
      :attributName="'name'"
      :title="'Имя'"
      :error="getErrors.name"
      v-model="state.name"
      @update:modelValue="edit"
    />
    <comp-input
      :attributName="'age'"
      :title="'Возраст'"
      :error="getErrors.age"
      v-model="state.age"
      @update:modelValue="edit"
    />
    <comp-button :style="'weak'" v-if="type === 'kid'" @click.prevent="remove">
      Удалить
    </comp-button>
  </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { User, Kid } from '../models/models';
import { useVuelidate } from '@vuelidate/core';
import {
  required,
  minLength,
  maxLength,
  minValue,
  maxValue,
} from '@vuelidate/validators';

export default defineComponent({
  setup() {
    return { v$: useVuelidate() };
  },
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
  validations() {
    return {
      state: {
        name: { required, minLength: minLength(2), maxLength: maxLength(20) },
        age: { required, minValue: minValue(0), maxValue: maxValue(110) },
      },
    };
  },
  methods: {
    edit() {
      this.$emit('edit', this.state);
      this.$emit('validate', !!this.getErrors);
    },
    remove() {
      this.$emit('remove', this.state);
    },
  },
  props: {
    type: { type: String, required: true },
    data: { type: Object },
  },
  computed: {
    getErrors() {
      const errors: { name: string; age: string } = { name: '', age: '' };
      if (this.v$.state.name.required.$invalid) {
        errors.name = 'Обязательное поле';
      } else if (this.v$.state.name.minLength.$invalid) {
        errors.name = 'Минимум 2 символа';
      } else if (this.v$.state.name.maxLength.$invalid) {
        errors.name = 'Не более 20 символа';
      }
      if (this.v$.state.age.required.$invalid) {
        errors.age = 'Обязательное поле';
      } else if (
        this.type === 'kid' &&
        (this.state.age < 0 || this.state.age > 17)
      ) {
        errors.age = 'Возраст ребенка от 0 до 17 лет';
      } else if (
        this.v$.state.age.minValue.$invalid ||
        this.v$.state.age.maxValue.$invalid
      ) {
        errors.age = 'Некорректное значение';
      }
      return errors;
    },
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
  @media screen and (max-width: $breakpoint-mobile-big) {
    flex-direction: column;
  }
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
