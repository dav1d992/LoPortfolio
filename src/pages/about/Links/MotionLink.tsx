import { Icon, Link } from "@chakra-ui/react";
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
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={platformName}
        onClick={handleClickLink}
        download={isDownload}
      >
        <Icon as={icon} fontSize="2xl" />
      </Link>
    </MotionFlex>
  );
};

export default MotionLink;
