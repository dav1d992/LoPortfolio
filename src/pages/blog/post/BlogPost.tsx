import { Box } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

import BlogPostHead from "../../../lib/blog/Head";
import { Renderers } from "../../../lib/blog/Renderers";
import MotionFlex from "../../../lib/motion/MotionFlex";
import { BlogPostType } from "../../../lib/types/blog";

import styles from "./BlogPost.module.scss";

export type BlogPostProps = {
  postData: BlogPostType;
};

const BlogPost = ({ postData }: BlogPostProps) => {
  return (
    <MotionFlex
      variants={{
        before: { opacity: 0, y: 20, transition: { type: "spring" } },
        after: { opacity: 1, y: 0, transition: { type: "spring" } },
      }}
      initial="before"
      animate="after"
    >
      <Box as="article">
        <BlogPostHead postData={postData} />

        <ReactMarkdown className={styles.content} components={Renderers}>
          {postData?.rawContent}
        </ReactMarkdown>
      </Box>
    </MotionFlex>
  );
};

export default BlogPost;
