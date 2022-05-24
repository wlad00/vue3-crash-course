import { createApp } from 'vue'
import App from './App'

import components_ui from '@/components/UI';
import directives from '@/directives';

import router from "@/router/router";
import store from '@/store';


// console.log(components_ui)

const app = createApp(App)

// Глобальная регистрация ui-компонентов

components_ui.forEach(ui => {
    app.component(ui.name, ui)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app
    .use(router)
    .use(store)

    .mount('#app');
