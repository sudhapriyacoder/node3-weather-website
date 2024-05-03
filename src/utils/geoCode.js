const request = require("postman-request");

const geocodeData = {
    "batch": [
      {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "id": "dXJuOm1ieGFkcjo2YzdhYjM4Yi05YzM4LTQ3ZDItODFkMS1jYzZlYjg5YzliMWM",
            "geometry": {
              "type": "Point",
              "coordinates": [-77.03655, 38.89768]
            },
            "properties": {
              "mapbox_id": "dXJuOm1ieGFkcjo2YzdhYjM4Yi05YzM4LTQ3ZDItODFkMS1jYzZlYjg5YzliMWM",
              "feature_type": "address",
              "name": "1600 Pennsylvania Avenue Northwest",
              "coordinates": {
                "longitude": -77.03655,
                "latitude": 38.89768,
                "accuracy": "rooftop"
              },
              "place_formatted": "Washington, District of Columbia 20500, United States",
              "match_code": {
                "address_number": "matched",
                "street": "matched",
                "postcode": "matched",
                "place": "matched",
                "region": "matched",
                "locality": "not_applicable",
                "country": "inferred",
                "confidence": "exact"
              },
              "context": {
                "address": {
                  "mapbox_id": "dXJuOm1ieGFkcjo2YzdhYjM4Yi05YzM4LTQ3ZDItODFkMS1jYzZlYjg5YzliMWM",
                  "address_number": "1600",
                  "street_name": "Pennsylvania Avenue Northwest",
                  "name": "1600 Pennsylvania Avenue Northwest"
                },
                "street": {
                  "mapbox_id": "dXJuOm1ieGFkcjo2YzdhYjM4Yi05YzM4LTQ3ZDItODFkMS1jYzZlYjg5YzliMWM",
                  "name": "Pennsylvania Avenue Northwest"
                },
                "neighborhood": {
                  "mapbox_id": "dXJuOm1ieHBsYzpHYUVzN0E",
                  "name": "National Mall",
                  "alternate": {
                    "mapbox_id": "dXJuOm1ieHBsYzpEY1ZNN0E",
                    "name": "Franklin Mcpherson Square"
                  }
                },
                "postcode": {
                  "mapbox_id": "dXJuOm1ieHBsYzpBOEZPN0E",
                  "name": "20500"
                },
                "place": {
                  "mapbox_id": "dXJuOm1ieHBsYzpGSmlvN0E",
                  "name": "Washington",
                  "wikidata_id": "Q61"
                },
                "region": {
                  "mapbox_id": "dXJuOm1ieHBsYzpCUVRz",
                  "name": "District of Columbia",
                  "wikidata_id": "Q3551781",
                  "region_code": "DC",
                  "region_code_full": "US-DC"
                },
                "country": {
                  "mapbox_id": "dXJuOm1ieHBsYzpJdXc",
                  "name": "United States",
                  "wikidata_id": "Q30",
                  "country_code": "US",
                  "country_code_alpha_3": "USA"
                }
              }
            }
          }
        ],
        "attribution": "NOTICE: © 2023 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service (https://www.mapbox.com/about/maps/). This response and the information it contains may not be retained."
      },
      {
        "type": "FeatureCollection",
        "features": [],
        "attribution": "NOTICE: © 2023 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service (https://www.mapbox.com/about/maps/). This response and the information it contains may not be retained."
      },
      {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "id": "dXJuOm1ieGFkcjplMzVmMzZiOC1kYjRmLTQyOWItOWE4ZC0yZGQ3ZmQ1OTUzMTY",
            "geometry": {
              "type": "Point",
              "coordinates": [-73.9861365, 40.7488949]
            },
            "properties": {
              "mapbox_id": "dXJuOm1ieGFkcjplMzVmMzZiOC1kYjRmLTQyOWItOWE4ZC0yZGQ3ZmQ1OTUzMTY",
              "feature_type": "address",
              "name": "20 West 34th Street",
              "coordinates": {
                "longitude": -73.9861365,
                "latitude": 40.7488949,
                "accuracy": "rooftop"
              },
              "place_formatted": "New York, New York 10118, United States",
              "context": {
                "address": {
                  "mapbox_id": "dXJuOm1ieGFkcjplMzVmMzZiOC1kYjRmLTQyOWItOWE4ZC0yZGQ3ZmQ1OTUzMTY",
                  "address_number": "20",
                  "street_name": "West 34th Street",
                  "name": "20 West 34th Street"
                },
                "street": {
                  "mapbox_id": "dXJuOm1ieGFkcjplMzVmMzZiOC1kYjRmLTQyOWItOWE4ZC0yZGQ3ZmQ1OTUzMTY",
                  "name": "West 34th Street"
                },
                "neighborhood": {
                  "mapbox_id": "dXJuOm1ieHBsYzpGQ2VNN0E",
                  "name": "Koreatown"
                },
                "postcode": {
                  "mapbox_id": "dXJuOm1ieHBsYzpBWUFPN0E",
                  "name": "10118"
                },
                "locality": {
                  "mapbox_id": "dXJuOm1ieHBsYzpGREtLN0E",
                  "name": "Manhattan",
                  "wikidata_id": "Q11299"
                },
                "place": {
                  "mapbox_id": "dXJuOm1ieHBsYzpEZTVJN0E",
                  "name": "New York",
                  "wikidata_id": "Q60"
                },
                "district": {
                  "mapbox_id": "dXJuOm1ieHBsYzpBUU5tN0E",
                  "name": "New York County",
                  "wikidata_id": "Q500416"
                },
                "region": {
                  "mapbox_id": "dXJuOm1ieHBsYzpBYVRz",
                  "name": "New York",
                  "wikidata_id": "Q1384",
                  "region_code": "NY",
                  "region_code_full": "US-NY"
                },
                "country": {
                  "mapbox_id": "dXJuOm1ieHBsYzpJdXc",
                  "name": "United States",
                  "wikidata_id": "Q30",
                  "country_code": "US",
                  "country_code_alpha_3": "USA"
                }
              }
            }
          }
        ],
        "attribution": "NOTICE: © 2023 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service (https://www.mapbox.com/about/maps/). This response and the information it contains may not be retained."
      }
    ]
  }

// console.log(`Latitude = ${JSON.stringify(geocodeData.batch[0].features[0].geometry.coordinates[0])}, Longitude =  ${geocodeData.batch[0].features[0].geometry.coordinates[1]}`)

geoCode = (address, callback) => {
    const url = `https://api.mapbox.com/search/geocode/v6/forward?q=${address}&access_token=pk.eyJ1Ijoic3VkaGFwcml5YSIsImEiOiJjbHZleXdibmUwZ2F3MmxsOXZzOTFhOWV6In0.YI-BSPzA6W6qUvdplPqnSQ`;
    request({ url: url, json: true }, (error, response) => {
        if(error) {
           callback("Unable to connect to geocode service!", undefined);
        } else if(response.body.error_code) {
           callback("Unable to find geocode!", undefined);
        } else {
            callback(undefined, {latitude: geocodeData.batch[0].features[0].geometry.coordinates[0], longitude: geocodeData.batch[0].features[0].geometry.coordinates[1]})
        }
    });
};

module.exports = geoCode;