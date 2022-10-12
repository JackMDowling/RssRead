import React from 'react';
import Entry from './Entry.jsx';

const Feed = (props) => {
  const { item, image } = props.data.rss.channel;
  console.log(item);
  return (
    <div className="feed">
      <ul>
        {item.map((ele) => {
          console.log(ele);
          const content = ele['content:encoded']?._cdata;
          const title = ele.title._cdata;
          return content ? (
            <li>
              <Entry title={title} content={content} />
            </li>
          ) : (
            <></>
          );
        })}
      </ul>
    </div>
  );
};
export default Feed;
