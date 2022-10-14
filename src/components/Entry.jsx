import React, { useState } from 'react';

const Entry = (props) => {
  const [saveText, setSaveText] = useState('Save');
  const { content, title, setArticle, saveNewArticle, link } = props;

  // TODO!!!

  // If no _cdata return just a link

  return (
    <div
      className="entry"
      onClick={() => setArticle(content, title, link)}
      key={title}
    >
      <div
        className="saveButton"
        onClick={() => {
          setSaveText('Saved');
          saveNewArticle(title, content);
        }}
      >
        {saveText}
      </div>
      <p className="entryText">{title}</p>
    </div>
  );
};

export default Entry;
