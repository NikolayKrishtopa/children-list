<template>
  <comp-section :title="'Персональные данные'">
    <tag-item :text="`${userData.name}, ${userData.age} лет`" />
  </comp-section>
  <comp-section :title="'Дети (макс. 5)'">
    <tag-item
      v-for="kid in kidsList"
      :key="kid.id"
      :text="`${kid.name}, ${kid.age} лет`"
    />
  </comp-section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
export default defineComponent({
  data() {
    return {
      name: 'preview-page',
    };
  },
  computed: mapGetters(['userData', 'kidsList']),
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
