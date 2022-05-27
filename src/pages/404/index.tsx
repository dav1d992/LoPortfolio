import {
  Box,
  Button,
  Heading,
  Text,
  Link as ChakraLink,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import MotionFlex from "../../lib/motion/MotionFlex";

const Page404 = () => {
  return (
    <Box>
      <MotionFlex
        width={["100%", "70%", "60%", "60%"]}
        margin="0 auto"
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
      >
        <Image src="https://http.cat/404" />
      </MotionFlex>
      <Text textAlign="center" fontSize="xs">
        <ChakraLink href="https://http.cat/404" isExternal></ChakraLink>
      </Text>

      <Box marginY={4}>
        <Heading textAlign="center" fontSize="3xl" marginBottom={2}>
          Seems like you&apos;re lost.
        </Heading>

        <Box textAlign="center">
          <Link href="/" passHref>
            <Button backgroundColor="buttonBackground">
              Let&apos;s Head Back
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Page404;
