/* @/app/index.ts */

import "@/services/web/registerServiceWorker";
import "@/views/assets/css/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import Notifications from "@kyvg/vue3-notification";
import velocity from "velocity-animate";
import router from "@/services/routes";
import App from "@/views/App.vue";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia).use(router).use(Notifications, { velocity }).mount("#app");

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-24 */
