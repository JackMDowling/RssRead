import React, { useState, useEffect } from 'react';
import Feed from './components/Feed.jsx';
import Header from './components/Header.jsx';
import { getRss } from './helpers/getRss.js';

const App = () => {
  // State Bank
  const [selectedFeed, setSelectedFeed] = useState(
    'https://medium.com/feed/the-economist'
  );
  const [feedData, setFeedData] = useState();
  const [savedArticles, setSavedArticles] = useState({});
  const [articleContent, setArticleContent] = useState();
  const [articleTitle, setArticleTitle] = useState();
  const [articleLink, setArticleLink] = useState();

  // Function Bank

  const selectFeed = (url) => {
    setSelectedFeed(url);
  };
  
  const saveNewArticle = (title, content) => {
    if (!(title in savedArticles)) {
      setSavedArticles({ ...savedArticles, [title]: content });
    }
  };

  const setArticle = (content, title, link) => {
    setArticleContent(content);
    setArticleTitle(title);
    setArticleLink(link);
  };

  // Use Effects

  useEffect(() => {
    async function fetchData() {
      const convertedXml = await getRss(selectedFeed);
      setFeedData(convertedXml);
    }
    fetchData();
  }, [selectedFeed]);

  useEffect(() => {
    const bookmarks = localStorage.getItem('bookmarks');
    if (bookmarks) {
      setSavedArticles(JSON.parse(bookmarks));
      localStorage.setItem('bookmarks', JSON.stringify(savedArticles));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(savedArticles));
  }, [savedArticles]);

  return feedData ? (
    <div className="appContainer">
      <Header
        selectFeed={selectFeed}
        setArticle={setArticle}
        savedArticles={savedArticles}
      />
      <Feed
        saveNewArticle={saveNewArticle}
        setArticle={setArticle}
        data={feedData}
        articleContent={articleContent}
        articleTitle={articleTitle}
        articleLink={articleLink}
      />
    </div>
  ) : (
    <div>Loading...</div>
  );
};
export default App;
