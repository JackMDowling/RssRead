import React from 'react';

const Feed = (data) => {
  const { item } = data.data.rss.channel;
  const entries = item.map((ele) => {
    /* data to grab
       .link._text
       .media:content
    */
    const imageUrl = ele['media:content'][0]._attributes.url;
    console.log(ele);
    return (
      <li>
        <img src={imageUrl} alt="N/A" />
        {ele.title._text}
      </li>
    );
  });
  console.log('testFeed', item[0].title._text);
  console.log(entries);
  return (
    <div className="feed">
      <ul>{entries}</ul>
    </div>
  );
};
export default Feed;
