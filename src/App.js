import React, { useState, useEffect } from 'react';
import Feed from './components/Feed.jsx';
import Header from './components/Header.jsx';
const convert = require('xml-js');
import { getRss } from './helpers/getRss.js';

const App = () => {
  const [feedData, setFeedData] = useState();
  useEffect(() => {
    async function fetchData() {
      const asyncData = await getRss();
      setFeedData(asyncData);
    }
    fetchData();
  }, []);
  console.log('hey jack');
  console.log(feedData);
  return feedData ? (
    <div>
      <Header />
      <Feed data={feedData} />
    </div>
  ) : (
    <div>Loading...</div>
  );
};
export default App;
