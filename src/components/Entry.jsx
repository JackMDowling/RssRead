import React, { useState } from 'react';
import Article from './Article.jsx';

const Entry = (props) => {
  const [toggleArticle, setToggleArticle] = useState(false);
  // Bookmark
  const { content, title } = props;

  // TODO!!!

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
    <div className="entry" onClick={clickHandler}>
      <div className="saveButton">Save</div>
      <p className="entryText">{title}</p>
    </div>
  ) : (
    <div onClick={clickHandler}>
      <Article content={content} title={title} />
    </div>
  );
};
export default Entry;
