const convert = require('xml-js');

async function getRss(url) {
  let convertedXml = await fetch(`https://cors-anywhere.herokuapp.com/${url}`)
    .then((response) => response.text())
    .then((str) => {
      const jsonStringData = convert.xml2json(str, {
        compact: true,
        spaces: 4,
      });
      const jsonObjData = JSON.parse(jsonStringData);
      return jsonObjData;
    });
  return convertedXml;
}

module.exports = { getRss };
