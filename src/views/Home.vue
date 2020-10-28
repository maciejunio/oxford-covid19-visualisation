<template>
  <div class="home">
    <v-select
      v-if="config"
      @input="selectCountry"
      v-model="selectedCountry"
      :options="config"
      label="Name"
    ></v-select>
    <v-select
      v-if="selectedCountry"
      @input="selectAdminLevel"
      v-model="selectedAdminLevel"
      :options="adminLevels"
      label="Name"
    ></v-select>
    <div class="map" style="margin-top: 40px;" v-if="countryData">
      <l-map
        ref="map"
        v-if="selectedCountry"
        :zoom="zoom"
        :center="center"
        style="height: 80%"
      >
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-geojson :geojson="countryData.geojson"></l-geojson>
      </l-map>
    </div>
  </div>
</template>

<script>
import { DataService } from "@/services/DataService";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { latLng } from "leaflet";

export default {
  async created() {
    this.dataService = new DataService();
    this.config = await this.dataService.getConfig();
    this.countryData = await this.dataService.getWorldData();
    this.selectedCountry = this.config.find((el) => el.Name === "World");
    this.selectedAdminLevel = this.selectedCountry.AdminLevels[0];
  },
  name: "Home",
  components: { vSelect },
  data() {
    return {
      countryData: null,
      selectedCountry: null,
      dataService: null,
      config: null,
      selectedAdminLevel: null,
      zoom: 2,
      center: latLng(42.3, 16),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      showParagraph: false,
      additional: {
        preferCanvas: true,
      },
    };
  },
  methods: {
    async selectCountry() {
      this.$refs.map.mapObject.setView(
        latLng(this.selectedCountry.Latitude, this.selectedCountry.Longitude),
        this.selectedCountry.MapZoomLevel
      );
      this.selectedAdminLevel = this.selectedCountry.AdminLevels[0];
      this.countryData = await this.dataService.getCountryData(this.selectedCountry.Name, this.selectedAdminLevel.Name);
    },
    async selectAdminLevel() {
      this.countryData = await this.dataService.getCountryData(this.selectedCountry.Name, this.selectedAdminLevel.Name);
    },
  },
  computed: {
    adminLevels() {
      return this.selectedCountry.AdminLevels;
    },
  },
};
</script>
<style lang="scss" scoped>
.map {
  width: 100%;
  height: 900px;
}
</style>
