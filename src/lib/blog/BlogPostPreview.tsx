import { Box, Heading, Text, Flex, keyframes } from "@chakra-ui/react";
import Link from "next/link";
import MotionFlex from "../motion/MotionFlex";
import { BlogPostType } from "../types/blog";
import { dateFormatLong } from "../utils/dateFormat";

type BlogPostPreviewProps = {
  postData: BlogPostType;
};

const waveAnimationKeyframes = keyframes`
  0% { transform: rotate(0deg);  }
  25% { transform: rotate(-10deg);  }
  50% { transform: rotate(15deg);  }
  75% { transform: rotate(-10deg);  }
  100% { transform: rotate(0deg); }
`;

const waveAnimation = `${waveAnimationKeyframes} 1s infinite`;

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
        <Flex
          as="a"
          flexWrap="wrap"
          alignItems="center"
          width="100%"
          _hover={{ animate: { waveAnimation } }}
        >
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
            <Text animation={waveAnimation} fontSize={40}>
              ✍️
            </Text>
          </MotionFlex>
          <Box flexBasis={["90%"]} paddingLeft={12}>
            <Heading size="lg" marginBottom={2}>
              {postData.title}
            </Heading>
            <Text>{dateFormatLong(postData.date)}</Text>
          </Box>
        </Flex>
      </Link>
    </Box>
  );
};

export default BlogPostPreview;
