import React, { useState, useEffect } from 'react';
import Feed from './components/Feed.jsx';
import Header from './components/Header.jsx';
import { getRss } from './helpers/getRss.js';

const App = () => {
  const [feedData, setFeedData] = useState();
  const [selectedFeed, setSelectedFeed] = useState(
    'https://medium.com/feed/the-economist'
  );

  const selectFeed = (url) => {
    setSelectedFeed(url);
  };

  useEffect(() => {
    async function fetchData() {
      const asyncData = await getRss(selectedFeed);
      setFeedData(asyncData);
    }
    fetchData();
  }, [selectedFeed]);

  return feedData ? (
    <div className="appContainer">
      <Header selectFeed={selectFeed} />
      <Feed data={feedData} />
    </div>
  ) : (
    <div>Loading...</div>
  );
};
export default App;
