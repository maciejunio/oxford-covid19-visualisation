export const config = {
  Countries: [
    {
      Name: "World",
      Longitude: 16.0,
      Latitude: 42.3,
      MapZoomLevel: 2,
      AdminLevels: [
        {
          Level: 0,
          Name: "World Level 0",
          EpidemiologyFile:
            "https://raw.githubusercontent.com/covid19db/web-page-data/master/json/wor0.json.gz",
          populationData: true,
          default: true,
        },
      ],
    },
    {
      Name: "United Kingdom",
      Longitude: -1.23,
      Latitude: 54.57,
      MapZoomLevel: 6,
      AdminLevels: [
        {
          Level: 3,
          Name: "Administration Level 3",
          EpidemiologyFile:
            "https://raw.githubusercontent.com/covid19db/web-page-data/master/json/gbr3.json.gz",
          populationData: true,
          default: true,
        },
      ],
    },
    {
      Name: "Poland",
      Longitude: 19.1451,
      Latitude: 51.9194,
      MapZoomLevel: 6,
      AdminLevels: [
        {
          Level: 1,
          Name: "Administration Level 1",
          EpidemiologyFile:
            "https://raw.githubusercontent.com/covid19db/web-page-data/master/json/pol1.json.gz",
          populationData: true,
        },
        {
          Level: 2,
          Name: "Administration Level 2",
          EpidemiologyFile:
            "https://raw.githubusercontent.com/covid19db/web-page-data/master/json/pol2.json.gz",
          populationData: true,
        },
      ],
    },
  ],
};
