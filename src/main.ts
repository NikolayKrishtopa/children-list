import { createApp } from 'vue';

import App from '/src/components/App.vue';

const app = createApp(App);
console.log(App);

app.mount('#root');
