<template>
  <comp-section :title="'Персональные данные'">
    <comp-form :type="'user'" :data="userData" />
  </comp-section>
  <button
    type="button"
    class="add-btn"
    v-if="state.kids.length < 5"
    @click="addKid"
  >
    Добавить ребенка
  </button>
  <comp-section :title="'Дети (макс. 5)'">
    <div class="kids">
      <comp-form
        v-for="kid in state.kids"
        :type="'kid'"
        :key="kid.id"
        :data="kid"
      />
    </div>
  </comp-section>
  <button class="save-btn">Сохранить</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { User, Kid } from '../models/models';
import { mapGetters } from 'vuex';
export default defineComponent({
  data() {
    return {
      name: 'form-page',
    };
  },
  computed: mapGetters(['userData', 'kidsList']),
  // methods: {
  //   updateUserData(data: User) {
  //     this.state.user = data;
  //   },
  //   addKid() {
  //     this.state.kids.push({ id: Date.now(), name: '', age: 0 });
  //   },
  //   removeKid(data: Kid) {
  //     this.state.kids = this.state.kids.filter((kid) => kid.id !== data?.id);
  //   },
  //   editKid(data: Kid) {
  //     this.state.kids = this.state.kids.map((k) =>
  //       k.id === data.id ? data : k
  //     );
  //   },
  //   sendData() {
  //     this.$emit('update', this.state);
  //   },
  // },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log(this.$store.getters.getUserData);
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
