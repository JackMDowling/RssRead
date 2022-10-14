import React, { useEffect, useState } from 'react';

const Bookmark = ({ savedArticles, setArticle }) => {
  const [displayToggle, setDisplayToggle] = useState(false);
  const [savedTitles, setSavedTitles] = useState([]);
  const [increment, setIncrement] = useState(0);


  const toggleDisplay = () => {
    if (!displayToggle) {
      setDisplayToggle(true);
    } else {
      setDisplayToggle(false);
    }
    setIncrement(increment + 1);
  };

  useEffect(() => {
    setSavedTitles(Object.keys(savedArticles));
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
            <div
              className="savedFeed"
              onClick={() => {
                setArticle(savedArticles[ele], ele);
                toggleDisplay();
                console.log(displayToggle);
              }}
            >
              {ele}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Bookmark;
