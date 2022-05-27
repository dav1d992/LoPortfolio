import {
  Badge,
  Circle,
  Collapse,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CareerEntry } from "./careerEntries";

interface CareerListItemProps {
  entry: CareerEntry;
  isEducation?: boolean;
}

export const CareerListItem = ({ entry, isEducation }: CareerListItemProps) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  let year = entry.endDate.getFullYear() - entry.startDate.getFullYear();
  let month;
  let techStackHeaderText = entry.techStackHeaderText;

  if (entry.endDate.getMonth() < entry.startDate.getMonth()) {
    year--;
    month = 12 - entry.startDate.getMonth() + entry.endDate.getMonth();
  } else {
    month = entry.endDate.getMonth() - entry.startDate.getMonth();
  }

  const duration = isEducation
    ? ` ${entry.startDate.getFullYear()} - ${entry.endDate.getFullYear()}`
    : `${year} years, ${month} months`;

  if (!entry.techStackHeaderText)
    techStackHeaderText = `At ${entry.companyName} I mainly ${
      entry.present ? "work with" : "worked with"
    }`;

  return (
    <VStack
      width={[72, "47rem"]}
      alignItems="left"
      transition="0.2s ease-out"
      _hover={{
        transform: "scale(1.02, 1.02)",
      }}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      paddingRight={3}
    >
      <Collapse startingHeight={60} in={show} onClick={handleToggle}>
        <HStack marginBottom={8}>
          <Image boxSize={16} objectFit="cover" src={entry.companyLogo} />
          <VStack alignItems="left">
            <Heading size="md" fontSize={[13, 20]}>
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
            <Heading size="sm" fontStyle={"italic"} fontSize={[11, 20]}>
              {entry.position}
            </Heading>
          </VStack>
          <Spacer />
          <Text display={["none", "flex"]} fontStyle={"italic"}>
            {duration}
          </Text>
        </HStack>
        <VStack alignItems="left" marginLeft={3} marginBottom={3}>
          <Text marginBottom={8}>{entry.description}</Text>
          <Heading size="sm">{techStackHeaderText}:</Heading>
          <SimpleGrid columns={2} spacingY={1}>
            {entry.techStack &&
              entry.techStack.map((tech) => (
                <HStack key={tech}>
                  <Circle size="5px" bg="brand.500" />
                  <Text> {tech}</Text>
                </HStack>
              ))}
          </SimpleGrid>
        </VStack>
      </Collapse>
    </VStack>
  );
};
