import React, { useState } from 'react';
import Article from './Article.jsx';

const Entry = (props) => {
  // Set State for Display Article
  const [toggleArticle, setToggleArticle] = useState(false);
  // Bookmark
  const { src, title, link } = props;
  const clickHandler = (e) => {
    e.preventDefault();
    if (!toggleArticle) {
      setToggleArticle(true);
    } else {
      setToggleArticle(false);
      console.log('checking', toggleArticle);
    }
  };
  return !toggleArticle ? (
    <li className="entry" onClick={clickHandler}>
      <img src={src} alt="N/A" />
      <p>{title}</p>
    </li>
  ) : (
    <div onClick={clickHandler}>
      <Article />
    </div>
  );
};
export default Entry;
