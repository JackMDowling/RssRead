import React, { useState } from 'react';
import Article from './Article.jsx';

const Entry = (props) => {
  // Set State for Display Article
  const [toggleArticle, setToggleArticle] = useState(false);
  // Bookmark
  const { content, title } = props;
  
  const clickHandler = (e) => {
    e.preventDefault();
    if (!toggleArticle) {
      setToggleArticle(true);
    } else {
      setToggleArticle(false);
    }
  };
  return !toggleArticle ? (
    <li className="entry" onClick={clickHandler}>
      <p>{title}</p>
    </li>
  ) : (
    <div onClick={clickHandler}>
      <Article content={content} />
    </div>
  );
};
export default Entry;
