import React from 'react';
import Feed from './components/Feed.jsx';
import Header from './components/Header.jsx';
const convert = require('xml-js');

function getRss() {
  const url = 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml';
  try {
    fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      console.log(res.data);
      const jsonStringData = convert.xml2json(res.data, {
        compact: true,
        spaces: 4,
      });
      console.log(jsonStringData);
      const jsonObjData = JSON.parse(jsonStringData);
      return jsonObjData;
    });
  } catch (error) {
    console.log(error);
  }
}

const App = () => {
  const feedData = getRss();
  console.log(feedData);
  console.log('hey jack');
  return (
    <div>
      <Header />
      <Feed />
    </div>
  );
};
export default App;
