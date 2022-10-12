import React from 'react';

const Article = (props) => {
  // Set State for Display Article
  // Bookmark
  const { src, title, link } = props;
  const clickHandler = (e) => {
    e.preventDefault()
  }
  return (
    <li className="article">
    <h1>This is where the article would go</h1>
    </li>
  );
};
export default Article;
