<template>
  <footer class="footer">
    <p class="text-m">all rights reserved</p>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      name: 'comp-footer',
    };
  },
  methods: {},
  props: {},
});
</script>
<style lang="scss" scoped>
@import '../styles/globalVars.scss';

.footer {
  @include flex-row;
  padding: 30px;
  background-color: $primary-darker;
}
.text-m {
  @include text-main(13px, 1.22, $black);
}
</style>
