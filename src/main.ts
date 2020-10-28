import Vue from "vue";
import App from "./App.vue";
//import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import {
  LMap,
  LTileLayer,
  LMarker,
  LTooltip,
  LPopup,
  LGeoJson,
} from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);
Vue.component("l-tooltip", LTooltip);
Vue.component("l-popup", LPopup);
Vue.component("l-geojson", LGeoJson);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
