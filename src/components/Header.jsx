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

const Header = ({ selectFeed, savedArticles, setArticle }) => {
  const [savedFeeds, setSavedFeeds] = useState([
    'https://medium.com/feed/the-economist',
    'http://feeds.mashable.com/Mashable',
    'https://techcrunch.com/startups/feed/',
    'https://medium.com/feed/backchannel',
    'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
    'https://feeds.feedburner.com/lifehacker/full',
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
