import { Icon, Link, Tooltip } from "@chakra-ui/react";
import MotionFlex from "../../../lib/motion/MotionFlex";
import type { IconType } from "react-icons";

import { childAnimationProps } from "../../../lib/utils/links";

export type MotionLinkProps = {
  platformName: string;
  url: string;
  icon: IconType;
  isDownload?: boolean
};

const MotionLink = (props: MotionLinkProps) => {
  const { platformName, url, icon, isDownload } = props;

  const handleClickLink = () => {};

  return (
    <MotionFlex {...childAnimationProps}>
      <Tooltip label={platformName}>
        <Link href={url} isExternal onClick={handleClickLink} download={isDownload}>
          <Icon as={icon} fontSize="2xl" />
        </Link>
      </Tooltip>
    </MotionFlex>
  );
};

export default MotionLink;
