<template>
  <comp-section :title="'Персональные данные'">
    <tag-item :text="`${state.user.name}, ${state.user.age} лет`" />
  </comp-section>
  <comp-section :title="'Дети (макс. 5)'">
    <tag-item
      v-for="kid in state.kids"
      :key="kid.id"
      :text="`${kid.name}, ${kid.age} лет`"
    />
  </comp-section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { User, Kid } from '../models/models';
export default defineComponent({
  data() {
    return {
      name: 'preview-page',
      state: {
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
    updateUserData(data: User) {
      this.state.user = data;
    },
    addKid() {
      this.state.kids.push({ id: Date.now(), name: '', age: 0 });
    },
    removeKid(data: Kid) {
      this.state.kids = this.state.kids.filter((kid) => kid.id !== data?.id);
    },
    editKid(data: Kid) {
      this.state.kids = this.state.kids.map((k) =>
        k.id === data.id ? data : k
      );
    },
    sendData() {
      this.$emit('update', this.state);
    },
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
@import '../styles/globalVars.scss';
.title {
  @include section-title;
}
.wrapper {
  @include flex-column;
  align-items: flex-start;
  gap: 20px;
}
.kids {
  @include flex-column;
  gap: $vertical-gap;
}
.save-btn {
  @include button(strong);
}
.add-btn {
  @include button(bordered);
  align-self: flex-end;
  margin-bottom: -65px;
}
</style>
