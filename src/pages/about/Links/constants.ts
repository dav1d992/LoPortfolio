import {
  BsLinkedin,
  BsGithub,
  BsEnvelopeFill,
  BsInstagram
} from "react-icons/bs";
import { MotionLinkProps } from "./MotionLink";

export const wrapperAnimationProps = {
  variants: {
    before: { y: 0, opacity: 0, transition: { type: "spring" } },
    after: { y: 20, opacity: 1, transition: { type: "spring" } },
  },
  initial: "before",
  animate: "after",
};

export const staggerAnimationProps = {
  variants: {
    before: {},
    after: { transition: { staggerChildren: 0.06 } },
  },
  initial: "before",
  animate: "after",
};

export const childAnimationProps = {
  variants: {
    before: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
  },
};

export const socialLinks: Array<MotionLinkProps> = [
  {
    platformName: "GitHub",
    url: "https://github.com/dav1d992",
    icon: BsGithub,
  },
  {
    platformName: "LinkedIn",
    url: "https://linkedin.com/in/dav1d992",
    icon: BsLinkedin,
  },
  {
    platformName: "Mail",
    url: "mailto:daviden@live.dk",
    icon: BsEnvelopeFill,
  },
  {
    platformName: "Instagram",
    url: "https://www.instagram.com/realdavidlo/",
    icon: BsInstagram,
  },
];
