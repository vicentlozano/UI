import { createApp } from "vue";
import App from "./App.vue";
import BaseButton from "./components/buttons/BaseButton.vue";
import BaseCard from "./components/cards/BaseCard.vue";
import TheHeader from "./components/headers/TheHeader.vue";
import router from './router'
import BaseBadge from "./components/badges/BaseBadge.vue";
const app = createApp(App);
app.component("BaseButton", BaseButton);
app.component("BaseCard", BaseCard);
app.component("TheHeader", TheHeader);
app.component('BaseBadge', BaseBadge);
app.use(router);
app.mount("#app");
