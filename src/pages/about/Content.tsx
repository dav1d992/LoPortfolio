import {
  Button,
  Divider,
  Flex,
  HStack,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { Heading, Link, Text } from "@chakra-ui/react";
import MotionFlex from "../../lib/motion/MotionFlex";
import {
  additionalWorkEntries,
  educationEntries,
  workEntries,
} from "../../lib/career/careerEntries";
import { CareerList } from "../../lib/career/CareerList";

const Content = () => {
  return (
    <VStack alignItems="left" gap={6}>
      <MotionFlex
        flexDirection={"column"}
        gap={2}
        variants={{
          before: { opacity: 0, y: 20, transition: { type: "spring" } },
          after: { opacity: 1, y: 0, transition: { type: "spring" } },
        }}
        initial="before"
        animate="after"
      >
        <HStack mr="4">
          <Heading as="h1" size="xl">
            About me
          </Heading>
          <Spacer></Spacer>
          <Link href="https://drive.google.com/file/d/1jgsoFtbNqIbyqcsX7hXPaMGMDeoc66ud/view?usp=sharing">
            <Button>Download CV</Button>
          </Link>
        </HStack>
        <Text fontSize="xl">
          I&apos;m David, currently working as a Fullstack Developer.
        </Text>
        <Text fontSize="xl">
          Outside of work, I enjoy doing the usual stuff like eating sushi,
          playing Counter Strike, <br></br> and{" "}
          <Link href="https://www.instagram.com/realdavidlo/" isExternal>
            <Text flexDirection={"row"} as="span" fontWeight="extrabold">
              capturing moments 📸
            </Text>
          </Link>
        </Text>
      </MotionFlex>
      <Spacer />
      <Divider />
      <MotionFlex
        flexDirection={"column"}
        gap={8}
        variants={{
          before: { opacity: 0, y: 20, transition: { type: "spring" } },
          after: { opacity: 1, y: 0, transition: { type: "spring" } },
        }}
        initial="before"
        animate="after"
      >
        <Flex flexDirection={"column"} gap={2}>
          <Heading size="lg">Education</Heading>
          <CareerList
            useEducationTemplate
            listEntries={educationEntries}
          ></CareerList>
        </Flex>
        <Flex flexDirection={"column"} gap={2}>
          <Heading size="lg">Work Experience</Heading>
          <CareerList listEntries={workEntries}></CareerList>
        </Flex>
        <Flex flexDirection={"column"} gap={2}>
          <Heading size="lg">Additional Work Experience</Heading>
          <CareerList listEntries={additionalWorkEntries}></CareerList>
        </Flex>
      </MotionFlex>
    </VStack>
  );
};

export default Content;
