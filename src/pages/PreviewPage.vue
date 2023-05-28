<template>
  <main class="content">
    <comp-section :title="'Персональные данные'">
      <tag-item
        :filled="false"
        :text="`${userData.name}, ${userData.age} ${correctForm(userData.age)}`"
      />
    </comp-section>
    <comp-section :title="'Дети (макс. 5)'">
      <tag-item
        v-for="kid in kidsList"
        :key="kid.id"
        :text="`${kid.name}, ${kid.age} ${correctForm(kid.age)}`"
      />
    </comp-section>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import correctEnd from '../utils/helpers';
export default defineComponent({
  data() {
    return {
      name: 'preview-page',
    };
  },
  methods: {
    correctForm(num: number) {
      return correctEnd(num);
    },
  },
  computed: {
    ...mapGetters(['userData', 'kidsList']),
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
.content {
  @include content(60px);
}
</style>
