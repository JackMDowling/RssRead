import React, { useState } from 'react';

const Bookmark = ({ selectFeed }) => {
  const toggleDisplay = (e) => {
    e.preventdefault();
  };

  return (
    <button className="bookmark" onClick={toggleDisplay}>
      Saved
    </button>
  );
};
export default Bookmark;
