import type { GetStaticProps } from "next";

import type { BlogPostType } from "../types/blog";
import { getSortedPostsData } from "../utils/posts";
import { BlogPostListProps } from "../../pages/blog/list/BlogPostList";

export const getStaticProps: GetStaticProps<BlogPostListProps> = async () => {
  const allPostsData = getSortedPostsData().filter(
    (post: BlogPostType) => post.published === true
  );

  return {
    props: {
      allPostsData,
    },
  };
};
