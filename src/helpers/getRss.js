const axios = require('axios');
const convert = require('xml-js');

function getRss() {
  const url = `https://www.theguardian.com/sport/mlb/rss`;

  fetch(`https://cors-anywhere.herokuapp.com/${url}`)
    .then((response) => response.text())
    .then((str) => {
      const jsonStringData = convert.xml2json(str, {
        compact: true,
        spaces: 4,
      });
      const jsonObjData = JSON.parse(jsonStringData);
      return jsonObjData;
    })
    .then((data) => {
      return data;
      //   // const jsonStringData = convert.xml2json(data, {
      //   //   compact: true,
      //   //   spaces: 4,
      //   // });
      //   // console.log('data here', jsonStringData);
    });
}

module.exports = { getRss };
