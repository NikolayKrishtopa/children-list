<template>
  <main class="content">
    <div class="wrapper">
      <h2 class="title">Персональные данные</h2>
      <comp-form
        :type="'user'"
        :data="state.user"
        @update="console.log('fuck')"
      />
    </div>
    <div class="wrapper">
      <h2 class="title">Дети (макс. 5)</h2>
      <div class="kids">
        <comp-form
          v-for="kid in state.kids"
          :type="'kid'"
          :key="kid.id"
          :data="kid"
        />
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { User, Kid } from '../models/models';
export default defineComponent({
  data() {
    return {
      name: 'form-page',
      state: {
        user: {
          name: 'Пётр',
          age: 99,
        } as User,
        kids: [
          { id: 1, name: 'Мария', age: 10 },
          { id: 2, name: 'Павел', age: 6 },
          { id: 3, name: 'Семён', age: 4 },
        ] as Array<Kid>,
      },
    };
  },
  methods: {
    updateUserData(data: User) {
      console.log('updated');

      this.state.user = data;
    },
    addKid(data: Kid) {
      this.state.kids.push(data);
    },
    removeKid(id: number) {
      this.state.kids = this.state.kids.filter((kid) => kid.id !== id);
    },
    editKid(data: Kid) {
      this.state.kids = this.state.kids.map((k) =>
        k.id === data.id ? data : k
      );
    },
  },
  props: {},
});
</script>
<style lang="scss" scoped>
@import '../styles/globalVars.scss';

.content {
  @include flex-column;
  align-items: flex-start;
  gap: 44px;
  max-width: $max-width-content;
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
</style>
