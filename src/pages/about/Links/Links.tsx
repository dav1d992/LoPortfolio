import { Box, Text } from "@chakra-ui/react";
import MotionFlex from "../../../lib/motion/MotionFlex";

import {
  socialLinks,
  staggerAnimationProps,
  wrapperAnimationProps,
} from "../../../lib/utils/links";
import MotionLink from "./MotionLink";

export type ContactProps = {
  title?: string;
};

const Links = ({ title }: ContactProps) => {
  return (
    <Box marginY={4} {...wrapperAnimationProps}>
      <Text fontStyle="italic">{title}</Text>
      <MotionFlex
        wrap="wrap"
        gridGap={4}
        marginTop={4}
        {...staggerAnimationProps}
      >
        {socialLinks.map((link) => (
          <MotionLink {...link} key={link.url} />
        ))}
      </MotionFlex>
    </Box>
  );
};

export default Links;
