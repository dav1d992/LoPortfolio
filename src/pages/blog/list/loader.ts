import type { GetStaticProps } from "next";

import type { BlogPostType } from "../../../lib/types/blog";
import { getSortedPostsData } from "../../../lib/utils/posts";
import { BlogPostListProps } from "./BlogPostList";

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
