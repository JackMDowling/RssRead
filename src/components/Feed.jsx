import React from 'react';
import Entry from './Entry.jsx';
import { parseContent } from '../helpers/parseContent.js';
import Article from './Article.jsx';

const Feed = (props) => {
  const { item } = props.data.rss.channel;
  return (
    <div className="feedContainer">
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
      <div className="articleViewer">
        <Article />
      </div>
    </div>
  );
};
export default Feed;
