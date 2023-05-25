<template>
  <h1 class="red">{{ newNoteText }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      newNoteText: 'Хуй соси губой тряси',
      newNoteTitle: '',
    };
  },
  methods: {},
  props: {},
});
</script>
<style lang="scss">
.red {
  color: red;
}
</style>
