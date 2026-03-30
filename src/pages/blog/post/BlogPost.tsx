import { Box } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

import BlogPostHead from "../../../lib/blog/Head";
import Renderers from "../../../lib/blog/renderers";

import { BlogPostType } from "../../../lib/types/blog";
import styles from "./BlogPost.module.scss";

export type BlogPostProps = {
  postData: BlogPostType;
};

const BlogPost = ({ postData }: BlogPostProps) => {
  return (
    <Box as="article">
      <BlogPostHead postData={postData} />

      <Box className={styles.content}>
        <ReactMarkdown components={Renderers}>{postData?.rawContent}</ReactMarkdown>
      </Box>
    </Box>
  );
};

export default BlogPost;
