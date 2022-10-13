import React, { useState, useEffect } from 'react';
import Feed from './components/Feed.jsx';
import Header from './components/Header.jsx';
import { getRss } from './helpers/getRss.js';

const App = () => {
  const [feedData, setFeedData] = useState();
  const [selectedFeed, setSelectedFeed] = useState(
    'https://medium.com/feed/the-economist'
  );
  const [savedArticles, setSavedArticles] = useState({});
  const [articleContent, setArticleContent] = useState();
  const [articleTitle, setArticleTitle] = useState();

  const saveNewArticle = (title, content) => {
    if (!(title in savedArticles)) {
      setSavedArticles({ ...savedArticles, title: content });
    }
  };

  const selectFeed = (url) => {
    setSelectedFeed(url);
  };

  const setArticle = (content, title) => {
    setArticleContent(content);
    setArticleTitle(title);
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
      <Header selectFeed={selectFeed} savedArticles={savedArticles} />
      <Feed
        data={feedData}
        saveNewArticle={saveNewArticle}
        setArticle={setArticle}
        articleContent={articleContent}
        articleTitle={articleTitle}
      />
    </div>
  ) : (
    <div>Loading...</div>
  );
};
export default App;
