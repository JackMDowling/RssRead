import React, { useState, useEffect } from 'react';
import Feed from './components/Feed.jsx';
import Header from './components/Header.jsx';
import { getRss } from './helpers/getRss.js';

const App = () => {
  // State Bank
  const [feedData, setFeedData] = useState();
  const [selectedFeed, setSelectedFeed] = useState(
    'https://medium.com/feed/the-economist'
  );
  const [savedArticles, setSavedArticles] = useState({});
  const [articleContent, setArticleContent] = useState();
  const [articleTitle, setArticleTitle] = useState();

  // Function Bank

  const saveNewArticle = (title, content) => {
    if (!(title in savedArticles)) {
      setSavedArticles({ ...savedArticles, [title]: content });
      localStorage.setItem('bookmarks', JSON.stringify(savedArticles));
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

  useEffect(() => {
    const bookmarks = localStorage.getItem('bookmarks');
    if (bookmarks) {
      setSavedArticles(JSON.parse(bookmarks));
    }
  }, []);

  return feedData ? (
    <div className="appContainer">
      <Header
        selectFeed={selectFeed}
        savedArticles={savedArticles}
        setArticle={setArticle}
      />
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
