import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import MotionFlex from "../motion/MotionFlex";
import { BlogPostType } from "../types/blog";
import { dateFormatLong } from "../utils/dateFormat";

type BlogPostPreviewProps = {
  postData: BlogPostType;
};

const BlogPostPreview = ({ postData }: BlogPostPreviewProps) => {
  return (
    <Box
      width="100%"
      transition="0.2s ease-out"
      _hover={{
        transform: "scale(1.03, 1.03)",
      }}
    >
      <Link href={`/blog/${postData.id}`} passHref>
        <Flex as="a" flexWrap="wrap" alignItems="center" width="100%">
          <MotionFlex
            justifyContent="center"
            alignItems="center"
            variants={{
              before: { opacity: 0, y: 20, transition: { type: "spring" } },
              after: { opacity: 1, y: 0, transition: { type: "spring" } },
            }}
            initial="before"
            animate="after"
          >
            <Box borderWidth={10} borderRadius="lg" borderColor="brand.400">
              <Image boxSize={16} objectFit="cover" src={postData.imageUrl} />
            </Box>

            <Box flexBasis={["90%"]} paddingLeft={12}>
              <Heading size="lg" marginBottom={2}>
                {postData.title}
              </Heading>
              <Text>{dateFormatLong(postData.date)}</Text>
            </Box>
          </MotionFlex>
        </Flex>
      </Link>
    </Box>
  );
};

export default BlogPostPreview;
