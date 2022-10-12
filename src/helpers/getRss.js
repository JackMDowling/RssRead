const axios = require('axios');
const convert = require('xml-js');

function getRss() {
  try {
    axios.get('https://www.theguardian.com/sport/mlb/rss').then((res) => {
      const jsonStringData = convert.xml2json(res.data, {
        compact: true,
        spaces: 4,
      });
      const jsonObjData = JSON.parse(jsonStringData);
      return jsonObjData;
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getRss };
