const request = require("postman-request");

const weatherResponse = {
    request: {
      type: 'LatLon',
      query: 'Lat 37.83 and Lon -122.42',
      language: 'en',
      unit: 'm'
    },
    location: {
      name: 'San Francisco',
      country: 'United States of America',
      region: 'California',
      lat: '37.775',
      lon: '-122.418',
      timezone_id: 'America/Los_Angeles',
      localtime: '2024-04-24 23:04',
      localtime_epoch: 1713999840,
      utc_offset: '-7.0'
    },
    current: {
      observation_time: '06:04 AM',
      temperature: 13,
      weather_code: 116,
      weather_icons: [
        'https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png'
      ],
      weather_descriptions: [ 'Partly cloudy' ],
      wind_speed: 19,
      wind_degree: 280,
      wind_dir: 'W',
      pressure: 1019,
      precip: 0,
      humidity: 87,
      cloudcover: 75,
      feelslike: 12,
      uv_index: 1,
      visibility: 16,
      is_day: 'no'
    }
  }
//response.body === data   //true
// console.log(`${data.current.weather_descriptions[0]}. It is currently ${data.current.temperature} degrees out. There is a ${data.current.feelslike} chance of rain.`);

forecast = (latitude,longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=f1d456a178313aaa408a82e90fc7a516&query=${latitude},${longitude}`;
  request({ url: url, json: true }, (error, response) => {
      if(error) {
         callback("Unable to connect to weather service!", undefined);
      } else if(response.body.error_code || response.body.error) {
         callback("Unable to find location!", undefined);
      } else {
        callback(undefined, `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. There is a ${response.body.current.feelslike}% chance of rain.`)
      }
  });
};

module.exports = forecast;
