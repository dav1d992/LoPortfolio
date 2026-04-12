import {
  Badge,
  Box,
  Circle,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { asDayMonthYear, asYearAndMonth, isToday } from "../utils/dateFormat";
import { CareerEntry } from "./careerEntries";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

interface CareerListItemProps {
  entry: CareerEntry;
  isEducation?: boolean;
}

export const CareerListItem = ({ entry, isEducation }: CareerListItemProps) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  let techStackHeaderText = entry.techStackHeaderText;

  if (!entry.techStackHeaderText)
    techStackHeaderText = `At ${entry.companyName} I mainly ${
      entry.present ? "work with" : "worked with"
    }`;

  return (
    <VStack
      width={["80", "3xl"]}
      alignItems="stretch"
      spacing={0}
      transition="0.2s ease-out"
      _hover={{
        transform: "scale(1.02, 1.02)",
      }}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <HStack spacing={0} onClick={handleToggle} cursor="pointer">
        <Image
          boxSize={16}
          objectFit="cover"
          src={entry.companyLogo}
          alt={`${entry.companyName} logo`}
          borderRadius="md"
          m={2}
        />
        <Box flex={1} p={2}>
          <HStack>
            <VStack alignItems="left">
              <Heading size="md" fontSize={[13, 18]}>
                {entry.companyName}
                {entry.present && (
                  <Badge
                    fontSize={[11, 20]}
                    variant="outline"
                    marginLeft={2}
                    paddingLeft={1}
                    paddingRight={1}
                    paddingTop={0.5}
                  >
                    Present
                  </Badge>
                )}
              </Heading>
              <Heading size="sm" fontStyle={"italic"} fontSize={[11, 16]}>
                {entry.position}
              </Heading>
            </VStack>
            <Spacer />
            <VStack alignItems={"flex-end"}>
              <Text display={["none", "flex"]} fontStyle={"italic"}>
                {isEducation
                  ? `${entry.startDate.getFullYear()} - ${entry.endDate.getFullYear()}`
                  : asYearAndMonth(entry.startDate, entry.endDate)}
              </Text>
              {(show && <MdExpandLess></MdExpandLess>) || (
                <MdExpandMore></MdExpandMore>
              )}
            </VStack>
          </HStack>
        </Box>
      </HStack>
      {show ? (
        <VStack alignItems="left" width="100%" px={4} pb={3}>
          <Text
            fontSize={[12, 16]}
            fontStyle={"italic"}
          >{`From ${asDayMonthYear(entry.startDate)}`}</Text>
          <Text fontSize={[12, 16]} fontStyle={"italic"}>
            {isToday(entry.endDate) ? "" : `To ${asDayMonthYear(entry.endDate)}`}
          </Text>
          <Text marginBottom={8}>{entry.description}</Text>
          <Heading size="sm">{techStackHeaderText}</Heading>
          <SimpleGrid columns={2} rowGap={1}>
            {entry.techStack &&
              entry.techStack.map((tech) => (
                <HStack key={tech}>
                  <Circle size="5px" bg="brand.500" />
                  <Text> {tech}</Text>
                </HStack>
              ))}
          </SimpleGrid>
        </VStack>
      ) : null}
    </VStack>
  );
};
