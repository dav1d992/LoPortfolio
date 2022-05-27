import { Box, VStack } from "@chakra-ui/react";
import MotionFlex from "../../lib/motion/MotionFlex";
import { CareerEntry } from "./careerEntries";
import { CareerListItem } from "./CareerList.Item";

interface CareerListProps {
  listEntries: CareerEntry[];
  useEducationTemplate?: boolean;
}

export const CareerList = ({
  listEntries,
  useEducationTemplate,
}: CareerListProps) => {
  if (!useEducationTemplate) {
  }
  return (
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
      <VStack spacing={8}>
        {(useEducationTemplate &&
          listEntries.map((entry) => (
            <CareerListItem
              isEducation
              entry={entry}
              key={entry.companyName}
            ></CareerListItem>
          ))) ||
          listEntries.map((entry) => (
            <CareerListItem
              entry={entry}
              key={entry.companyName}
            ></CareerListItem>
          ))}
      </VStack>

      <Box flexBasis={["90%"]} paddingLeft={12}></Box>
    </MotionFlex>
  );
};
