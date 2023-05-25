<template>
  <comp-header />
  <form-page :data="store" @update="updateStore" />
  <comp-footer />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { User, Kid } from '../models/models';
export default defineComponent({
  data() {
    return {
      store: {
        user: {
          name: 'Пётр',
          age: 99,
        } as User,
        kids: [
          { id: 1, name: 'Мария', age: 10 },
          { id: 2, name: 'Павел', age: 6 },
          { id: 3, name: 'Семён', age: 4 },
          { id: 4, name: 'Саша', age: 4 },
          { id: 5, name: 'Аня', age: 4 },
        ] as Array<Kid>,
      },
    };
  },
  methods: {
    updateStore(data: typeof this.store) {
      this.store = data;
      console.log(this.store.user);
      console.log(this.store.kids);
    },
  },
});
</script>
<style lang="scss" scoped>
@import '../styles/globalVars.scss';

.content {
  @include flex-column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: $max-width-content;
}
</style>
