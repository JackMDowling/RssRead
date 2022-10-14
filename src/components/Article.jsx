import React from 'react';

const Article = (props) => {
  const { content, title, link } = props;
  function createMarkup() {
    return { __html: content };
  }
  return content ? (
    <div className="article">
      <h3>{title}</h3>
      <a className='artLink' href={link} target="_blank">Article Link</a>
      <div
        className="articleBody"
        dangerouslySetInnerHTML={createMarkup()}
      ></div>
    </div>
  ) : (
    <></>
  );
};
export default Article;
