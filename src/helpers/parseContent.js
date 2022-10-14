const parseContent = (item) => {
  let content =
    'The host has not made content available via its RSS feed, please visit the link to read this article.';
  if (item.description && item.description?._cdata) {
    content = item.description._cdata;
  }
  if (item['content:encoded'] && item['content:encoded']._cdata) {
    content = item['content:encoded']?._cdata;
  }
  return content;
};

module.exports = { parseContent };
