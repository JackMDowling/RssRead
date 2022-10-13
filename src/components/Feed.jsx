import React from 'react';
import Entry from './Entry.jsx';
import { parseContent } from '../helpers/parseContent.js';

const Feed = (props) => {
  const { item } = props.data.rss.channel;
  return (
    <ul className="feed">
      {item.map((ele) => {
        const content = parseContent(ele);
        const title = ele.title._cdata || ele.title._text;
        // Get the link again
        return content ? (
          <div>
            <Entry title={title} content={content} />
          </div>
        ) : (
          <></>
        );
      })}
    </ul>
  );
};
export default Feed;
