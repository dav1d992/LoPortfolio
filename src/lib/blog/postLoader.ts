import type { GetStaticProps } from "next";

import { getAllPostIds, getPostData } from "../utils/posts";
import { BlogPostProps } from "../../pages/blog/post/BlogPost";

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  const postData = await getPostData(params?.id as string);

  return {
    props: { postData },
  };
};
