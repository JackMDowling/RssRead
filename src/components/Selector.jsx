import React, { useState } from 'react';

const Selector = ({ savedFeeds, selectFeed }) => {
  const [displayToggle, setDisplayToggle] = useState(false);

  const toggleDisplay = (e) => {
    e.preventDefault();
    if (!displayToggle) {
      setDisplayToggle(true);
    } else {
      setDisplayToggle(false);
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    selectFeed(e.target.innerText);
    toggleDisplay(e);
  };

  return !displayToggle ? (
    <button className="selector" onClick={toggleDisplay}>
      Feeds
    </button>
  ) : (
    <div style={{ zIndex: '1' }}>
      <button className="selector" onClick={toggleDisplay}>
        Feeds
      </button>
      <div
        style={{
          zIndex: '2',
          position: 'absolute',
          border: '1px solid black',
          backgroundColor: 'white',
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
