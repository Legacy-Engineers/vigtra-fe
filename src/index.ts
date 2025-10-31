import { mount } from 'svelte';
import App from './App.svelte';
import './index.css';

document.title = 'Vigtra';
const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/png';
favicon.href = '/favicon.png';
document.head.appendChild(favicon);

const app = mount(App, {
  target: document.body,
});

export default app;
