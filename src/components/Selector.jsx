import React, { useState } from 'react';

const Selector = ({ savedFeeds, selectFeed }) => {
  const [displayToggle, setDisplayToggle] = useState(false);

  const toggleDisplay = (e) => {
    if (!displayToggle) {
      setDisplayToggle(true);
    } else {
      setDisplayToggle(false);
    }
  };
  const handleClick = (e) => {
    selectFeed(e.target.innerText);
    toggleDisplay(e);
  };

  return !displayToggle ? (
    <button className="selector" onClick={toggleDisplay}>
      Feeds
    </button>
  ) : (
    <div style={{ zIndex: '1' }}>x  
      <button className="selector" onClick={toggleDisplay}>
        Feeds
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
        {savedFeeds.map((ele) => {
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
export default Selector;
