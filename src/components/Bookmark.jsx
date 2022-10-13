import React, { useState } from 'react';

const Bookmark = ({ saveNewArticle }) => {

  return (
    <button className="bookmark" onClick={saveNewArticle}>
      Saved
    </button>
  );
};
export default Bookmark;
