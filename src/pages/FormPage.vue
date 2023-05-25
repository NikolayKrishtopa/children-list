<template>
  <main class="content">
    <div class="wrapper">
      <h2 class="title">Персональные данные</h2>
      <comp-form :type="'user'" :data="state.user" @edit="updateUserData" />
    </div>
    <button
      type="button"
      class="add-btn"
      v-if="state.kids.length < 5"
      @click="addKid"
    >
      Добавить ребенка
    </button>
    <div class="wrapper">
      <h2 class="title">Дети (макс. 5)</h2>
      <div class="kids">
        <comp-form
          v-for="kid in state.kids"
          :type="'kid'"
          :key="kid.id"
          :data="kid"
          @delete="removeKid"
        />
      </div>
    </div>
    <button class="save-btn" @click="sendData">Сохранить</button>
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
        user: { ...this.data.user } as User,
        kids: this.data.kids as Array<Kid>,
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

.content {
  @include flex-column;
  align-items: flex-start;
  gap: 30px;
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
.save-btn {
  @include button(strong);
}
.add-btn {
  @include button(bordered);
  align-self: flex-end;
  margin-bottom: -65px;
}
</style>
