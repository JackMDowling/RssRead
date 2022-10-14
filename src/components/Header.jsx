import React, { useState } from 'react';
import Selector from './Selector.jsx';
// import AddFeed from './AddFeed.jsx';
import Bookmark from './Bookmark.jsx';

const Header = ({ selectFeed, savedArticles, setArticle }) => {
  const [savedFeeds, setSavedFeeds] = useState([
    'https://medium.com/feed/the-economist',
    'http://feeds.mashable.com/Mashable',
    'https://techcrunch.com/startups/feed/',
    'https://medium.com/feed/backchannel',
  ]);
  return (
    <div className="header">
      <h5>RSS Reader</h5>
      <div className="buttonContainer">
        <Selector savedFeeds={savedFeeds} selectFeed={selectFeed} />
        <Bookmark savedArticles={savedArticles} setArticle={setArticle} />
        {/* <AddFeed /> */}
      </div>
    </div>
  );
};
export default Header;
