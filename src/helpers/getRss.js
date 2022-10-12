const axios = require('axios');
const convert = require('xml-js');

const getRss = async () => {
  try {
    axios.get('https://www.theguardian.com/us/rss').then((res) => {
      const jsonData = convert.xml2json(res.data, { compact: true, spaces: 4 });
      console.log(jsonData);
    });
  } catch (error) {
    console.log(error);
  }
};

export default getRss;

getRss();
