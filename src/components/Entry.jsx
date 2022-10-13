import React, { useState } from 'react';
import Article from './Article.jsx';

const Entry = (props) => {
  const [toggleArticle, setToggleArticle] = useState(false);
  // Bookmark
  const { content, title } = props;

  // TODO!!!

  // Need to parse content from description or from content:encoded
  // Write a function that looks for _cdata and returns that so we have some range
  // If no _cdata return just a link

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
      <p className="entryText">{title}</p>
    </li>
  ) : (
    <div onClick={clickHandler}>
      <Article content={content} />
    </div>
  );
};
export default Entry;
