<template>
  <comp-header />
  <main class="content">
    <router-view></router-view>
    <!-- <form-page :data="store" @update="updateStore" /> -->
  </main>
  <comp-footer />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { User, Kid } from '../models/models';
export default defineComponent({
  data() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
@import '../styles/globalVars.scss';

.content {
  @include flex-column;
  padding: 30px;
  align-items: flex-start;
  gap: 30px;
  max-width: $max-width-content;
  min-height: 100%;
  flex-grow: 1;
}
</style>
