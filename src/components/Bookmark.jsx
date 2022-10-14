import React, { useEffect, useState } from 'react';

const Bookmark = ({ savedArticles }) => {
  const [displayToggle, setDisplayToggle] = useState(false);
  const [savedTitles, setSavedTitles] = useState([]);
  const [increment, setIncrement] = useState(0);

  const toggleDisplay = (e) => {
    e.preventDefault();
    if (!displayToggle) {
      setDisplayToggle(true);
    } else {
      setDisplayToggle(false);
    }
    setIncrement(increment + 1);
  };
  const handleClick = (e) => {
    e.preventDefault();
    selectFeed(e.target.innerText);
    toggleDisplay(e);
  };

  useEffect(() => {
    setSavedTitles(Object.keys(savedArticles));
    console.log(savedTitles.length);
  }, [increment]);

  return !displayToggle ? (
    <button className="selector" onClick={toggleDisplay}>
      Saved
    </button>
  ) : (
    <div style={{ zIndex: '1' }}>
      <button className="selector" onClick={toggleDisplay}>
        Saved
      </button>
      <div
        style={{
          zIndex: '2',
          position: 'absolute',
          border: '1px solid black',
          backgroundColor: 'white',
          padding: '0.5em',
        }}
      >
        {savedTitles.map((ele) => {
          return (
            <div className="savedFeed" onClick={handleClick}>
              {ele}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Bookmark;
