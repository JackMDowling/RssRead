import React from 'react';
import Entry from './Entry.jsx';

const Feed = (data) => {
  const { item } = data.data.rss.channel;
  return (
    <div className="feed">
      <ul>
        {item.map((ele) => {
          const link = ele.link._text;
          const imageUrl = ele['media:content'][0]._attributes.url;
          return (
            <li>
              <Entry src={imageUrl} title={ele.title._text} link={link} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Feed;
