<template>
  <main class="content">
    <comp-section :title="'Персональные данные'">
      <comp-form :type="'user'" :data="state.user" @edit="editUserState" />
    </comp-section>
    <comp-button
      type="button"
      :style="'bordered'"
      :text="'Добавить ребенка'"
      class="add-btn"
      v-if="state.kids.length < 5"
      @click.prevent="addKidToState"
      ><img src="../assets/img/plus_icon.svg" alt=""
    /></comp-button>
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
    <comp-button
      :style="'solid'"
      :text="'Сохранить'"
      @click.prevent="dispatchSave"
    />
  </main>
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
.add-btn {
  align-self: flex-end;
  margin-bottom: -65px !important;
  @media screen and (max-width: $breakpoint-mobile-big) {
    padding: 10px !important;
    margin-bottom: -40px !important;
  }
  @media screen and (max-width: $breakpoint-mobile-small) {
    transform: scale(0.7) translateX(21%);
    margin-bottom: -30px !important;
  }
}
.content {
  @include content(30px);
}
</style>
