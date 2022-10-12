const axios = require('axios');
const convert = require('xml-js');

async function getRss() {
  const url = `https://www.theguardian.com/sport/mlb/rss`;
  let output = await fetch(`https://cors-anywhere.herokuapp.com/${url}`)
    .then((response) => response.text())
    .then((str) => {
      const jsonStringData = convert.xml2json(str, {
        compact: true,
        spaces: 4,
      });
      const jsonObjData = JSON.parse(jsonStringData);
      return jsonObjData;
    });
  console.log('out', output );
  return output;
}

module.exports = { getRss };
