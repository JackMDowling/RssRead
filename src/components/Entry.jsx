import React, { useState } from 'react';

const Entry = (props) => {
  const { content, title, setArticle } = props;

  // TODO!!!

  // If no _cdata return just a link

  return (
    <div
      className="entry"
      onClick={() => setArticle(content, title)}
      key={title}
    >
      <div className="saveButton">Save</div>
      <p className="entryText">{title}</p>
    </div>
  );
};

export default Entry;
