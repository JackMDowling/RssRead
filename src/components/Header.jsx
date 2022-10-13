import React, { useState } from 'react';
import Selector from './Selector.jsx';
import AddFeed from './AddFeed.jsx';
import Bookmark from './Bookmark.jsx';

/*
Header should have name, maybe logo left side
Drop down menu to select feed
Field to add feed url (BONUS)
Bookmark UI
*/

const Header = ({ selectFeed, savedArticles }) => {
  const [savedFeeds, setSavedFeeds] = useState([
    'https://medium.com/feed/the-economist',
    'http://feeds.mashable.com/Mashable',
    'https://techcrunch.com/startups/feed/',
    'https://medium.com/feed/backchannel',
  ]);
  return (
    <div className="header">
      <div className="headerLeft">
        <h3>RSS Reader</h3>
      </div>
      <div className="headerRight">
        <Selector savedFeeds={savedFeeds} selectFeed={selectFeed} />
        <Bookmark savedArticles={savedArticles} />
        <AddFeed />
      </div>
    </div>
  );
};
export default Header;
