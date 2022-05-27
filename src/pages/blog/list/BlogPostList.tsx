import { Heading, Box, Grid } from "@chakra-ui/react";

import BlogPostPreview from "../../../lib/blog/BlogPostPreview";
import MotionFlex from "../../../lib/motion/MotionFlex";
import { BlogPostType } from "../../../lib/types/blog";

export type BlogPostListProps = {
  allPostsData: Array<BlogPostType>;
};

const BlogPostList = ({ allPostsData }: BlogPostListProps) => {
  const blogPosts = allPostsData?.map((postData) => (
    <BlogPostPreview postData={postData} key={postData.title} />
  ));

  return (
    <MotionFlex
      variants={{
        before: { opacity: 0, y: 20, transition: { type: "spring" } },
        after: { opacity: 1, y: 0, transition: { type: "spring" } },
      }}
      initial="before"
      animate="after"
    >
      <Box>
        <Box marginBottom={22}>
          <Heading as="h1" size="xl" marginBottom={2}>
            Blog Posts
          </Heading>
          <Heading as="h3" size="md" marginBottom={2}>
            Writing down some learnings...
          </Heading>
        </Box>
        w8 why is this section empty?
        <Grid gap={12} marginTop={12}>
          {blogPosts}
        </Grid>
      </Box>
    </MotionFlex>
  );
};

export default BlogPostList;
