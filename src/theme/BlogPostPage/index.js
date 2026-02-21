import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';
import GiscusComponent from '@site/src/components/GiscusComponent';

export default function BlogPostPageWrapper(props) {
  const enableComments = props?.content?.metadata?.frontMatter?.enableComments;

  return (
    <>
      <BlogPostPage {...props} />
      {enableComments && <GiscusComponent />}
    </>
  );
}
