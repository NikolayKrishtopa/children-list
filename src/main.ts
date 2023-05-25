import { createApp } from 'vue';
import './styles/main.scss';
import './styles/reset.scss';
import Header from '/src/components/Header.vue';
import Footer from '/src/components/Footer.vue';
import App from '/src/components/App.vue';

const components = [Header, Footer];

const app = createApp(App);

components.forEach((c) => {
  app.component(c.data().name, c);
});

app.mount('#root');
