import { config } from "@/mock/config";

import { getGzipData } from "@/utils/getGzipData";

export class DataService {
  config: any;
  constructor() {
    this.config = config.Countries;
  }
  async getConfig() {
    return this.config;
  }
  async getWorldData() {
    const countryData = await getGzipData(
      "https://raw.githubusercontent.com/covid19db/web-page-data/master/json/wor0.json.gz"
    );
    countryData.geojson = {
      type: "FeatureCollection",
      features: [],
    };
    countryData.regions.forEach((element: any) => {
      const countryPolygon = {
        ...element,
        type: "Feature",
      };
      countryData.geojson.features.push(countryPolygon);
    });
    return countryData;
  }
  async getCountryData(countryName: string, adminLevel: number) {
    const countryConfig = this.config.find(
      (el: any) => el.Name === countryName
    );
    const epidemiologyFileUrl = countryConfig.AdminLevels.find(
      (el: any) => el.Name === adminLevel
    ).EpidemiologyFile;

    const countryData = await getGzipData(epidemiologyFileUrl);
    countryData.geojson = {
      type: "FeatureCollection",
      features: [],
    };
    countryData.regions.forEach((element: any) => {
      const countryPolygon = {
        ...element,
        type: "Feature",
      };
      countryData.geojson.features.push(countryPolygon);
    });
    return countryData;
  }
}
