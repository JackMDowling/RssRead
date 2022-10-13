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
  };

  return !displayToggle ? (
    <button className="selector" onClick={toggleDisplay}>
      Feeds
    </button>
  ) : (
    <>
      <button className="selector" onClick={toggleDisplay}>
        Feeds
      </button>
      <ul
        style={{
          position: 'absolute',
          zIndex: '2',
          border: '1px solid black',
          backgroundColor: 'white',
        }}
      >
        {savedFeeds.map((ele) => {
          return (
            <li className="savedFeed" onClick={handleClick}>
              {ele}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Selector;
