import React, { useEffect, useState } from 'react';

const Article = (props) => {
  // Set State for Display Article
  const [articleData, setArticleData] = useState();
  // Bookmark
  useEffect(() => {
    async function getArticle() {
      const data = await fetch(
        `https://cors-anywhere.herokuapp.com/${link}`
      ).then((res) => {
        const text = res.text();
        return text;
      });
    }
    getArticle();
    setArticleData(data);
  }, []);
  console.log(articleData);
  const { link } = props;
  console.log(link);

  return (
    <li className="article">
      <h1>This is where the article would go</h1>
    </li>
  );
};
export default Article;
