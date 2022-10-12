import React from 'react';

const Article = (props) => {
  const { content } = props;
  function createMarkup() {
    return { __html: content };
  }

  return (
    <div className="article" dangerouslySetInnerHTML={createMarkup()}></div>
  );
};
export default Article;
