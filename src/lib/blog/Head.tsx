import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { BlogPostType } from "../types/blog";
import { dateFormatLong } from "../utils/dateFormat";

type BlogPostHeadProps = {
  postData: BlogPostType;
};

const BlogPostHead = ({ postData }: BlogPostHeadProps) => {
  return (
    <Flex alignItems="center" marginBottom={16}>
      <Box flexBasis={["80%"]}>
        <Heading as="h1" size="2xl" marginBottom={8}>
          {postData.title}
        </Heading>
        <Link href="/about" isExternal>
          <Text>David Lo</Text>
        </Link>

        <Text>{dateFormatLong(postData.date)}</Text>
      </Box>
    </Flex>
  );
};

export default BlogPostHead;
