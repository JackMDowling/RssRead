import React from 'react';

const Article = (props) => {
  const { content, title } = props;
  function createMarkup() {
    return { __html: content };
  }
  return (
    <div className="article">
      <h3>{title}</h3>
      <div
        className="articleBody"
        dangerouslySetInnerHTML={createMarkup()}
      ></div>
    </div>
  );
};
export default Article;
