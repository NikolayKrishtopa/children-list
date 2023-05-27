import { createApp } from 'vue';
import './styles/main.scss';
import './styles/reset.scss';
import Header from '/src/components/Header.vue';
import Footer from '/src/components/Footer.vue';
import App from '/src/components/App.vue';
import Form from '/src/components/Form.vue';
import FormPage from '/src/pages/FormPage.vue';
import router from './router/router';
import SectionWrapper from '/src/components/UI/SectionWrapper.vue';
import TagItem from '/src/components/UI/TagItem.vue';
import Button from '/src/components/UI/Button.vue';
import Input from '/src/components/UI/Input.vue';
import store from './store';

const components = [
  Header,
  Footer,
  Form,
  FormPage,
  SectionWrapper,
  TagItem,
  Button,
  Input,
];

const app = createApp(App);

components.forEach((c) => {
  app.component(c.data().name, c);
});

app.use(router);
app.use(store);
app.mount('#root');
