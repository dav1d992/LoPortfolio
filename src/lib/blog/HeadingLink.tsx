import { Heading, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { convertToId, convertToIdLink } from "../utils/convertToIdLink";

type HeadingLinkProps = {
  children: string;
  heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const HeadingLink = ({ children, heading }: HeadingLinkProps) => {
  const router = useRouter();
  const level = Number((heading ?? "h3").split("h")[1]);

  const size: Record<number, string> = {
    1: "2xl",
    2: "xl",
    3: "lg",
    4: "md",
    5: "sm",
    6: "xs",
  };

  return (
    <Link
      href={convertToIdLink(router.asPath, String(children))}
      style={{ textDecoration: "none", marginTop: 16 }}
    >
      <Heading
        marginTop={16}
        as={heading}
        size={size[level]}
        id={convertToId(String(children))}
        textDecoration="none"
        _hover={{
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        {children}
      </Heading>
    </Link>
  );
};

export default HeadingLink;
