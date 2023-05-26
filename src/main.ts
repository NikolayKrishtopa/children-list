import { createApp } from 'vue';
import './styles/main.scss';
import './styles/reset.scss';
import Header from '/src/components/Header.vue';
import Footer from '/src/components/Footer.vue';
import App from '/src/components/App.vue';
import Form from '/src/components/Form.vue';
import FormPage from '/src/pages/FormPage.vue';
import router from './router/router';
import Section from '/src/components/UI/Section.vue';
import TagItem from '/src/components/UI/TagItem.vue';

const components = [Header, Footer, Form, FormPage, Section, TagItem];

const app = createApp(App);

components.forEach((c) => {
  app.component(c.data().name, c);
});

console.log(router);

app.use(router).mount('#root');
