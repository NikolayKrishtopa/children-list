<template>
  <comp-section :title="'Персональные данные'">
    <comp-form :type="'user'" :data="state.user" @edit="editUserState" />
  </comp-section>
  <button
    type="button"
    class="add-btn"
    v-if="kidsList.length < 5"
    @click.prevent="addKidToState"
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
        @edit="editKidState"
        @remove="removeKidFromState"
      />
    </div>
  </comp-section>
  <button class="save-btn" @click.prevent="dispatchSave">Сохранить</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import { Kid, User } from '../models/models';
export default defineComponent({
  computed: {
    ...mapGetters(['userData', 'kidsList']),
  },
  data() {
    return {
      name: 'form-page',
      state: {
        user: {} as User,
        kids: [] as Array<Kid>,
      },
    };
  },
  methods: {
    editUserState(data: User) {
      this.state.user = data;
    },
    addKidToState() {
      this.state.kids.push({ id: Date.now(), name: '', age: 0 });
    },
    removeKidFromState(data: Kid) {
      this.state.kids = this.state.kids.filter((kid) => kid.id !== data?.id);
    },
    editKidState(data: Kid) {
      this.state.kids = this.state.kids.map((k) =>
        k.id === data.id ? data : k
      );
    },
    dispatchSave() {
      this.$store.commit('updateUser', this.state.user);
      this.$store.commit('updateKids', this.state.kids);
    },
  },
  beforeMount() {
    this.state.user = JSON.parse(JSON.stringify(this.userData));
    this.state.kids = JSON.parse(JSON.stringify(this.kidsList));
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
