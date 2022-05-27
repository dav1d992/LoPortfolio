import {
  Box,
  Heading,
  HStack,
  Text,
  keyframes,
  Divider,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import MotionFlex from "../../lib/motion/MotionFlex";
import Links from "../about/Links/Links";

const waveAnimationKeyframes = keyframes`
  0% { transform: scale(2) rotate(0);  }
  50% { transform: scale(2) rotate(60deg);  }
  100% { transform: scale(2) rotate(0); }
`;

const waveAnimation = `${waveAnimationKeyframes} 1s ease-in-out infinite`;

const Welcome = () => {
  return (
    <MotionFlex
      variants={{
        before: { opacity: 0, y: 20, transition: { type: "spring" } },
        after: { opacity: 1, y: 0, transition: { type: "spring" } },
      }}
      initial="before"
      animate="after"
    >
      <Box
        height="60vh"
        alignItems="center"
        display="grid"
        w={["18rem", "60rem"]}
      >
        <Box
          verticalAlign="center"
          width={["100%", "80%", "60%"]}
          marginTop={[8, 0]}
          alignSelf={["none", "center"]}
        >
          <HStack spacing={5} marginBottom={5}>
            <Heading as="h1" size="3xl">
              Hello World!
            </Heading>
            <Box
              as={motion.div}
              animation={waveAnimation}
              width="12"
              height="12"
              display="flex"
              fontSize={26}
            >
              👋
            </Box>
          </HStack>

          <Heading as="h1" size="lg" marginBottom={2}>
            I&apos;m David.
          </Heading>
          <Text fontSize="xl">
            Software developer specializing in Frontend.
          </Text>
          <Divider marginTop="20px" marginBottom="20px" />
          <Text>
            Feel free to navigate around this site to get to know me better.
          </Text>
          <Links title="In a hurry? Here are some quick links to help you out:" />
        </Box>
      </Box>
    </MotionFlex>
  );
};

export default Welcome;
