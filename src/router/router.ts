import FormPage from '/src/pages/FormPage.vue';
import PreviewPage from '/src/pages/PreviewPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: FormPage },
    { path: '/preview', component: PreviewPage },
  ],
});

export default router;
