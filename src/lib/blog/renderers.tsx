import { Box, Button, Code, Flex, Link as ChakraLink } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { Options } from "react-markdown/lib/ast-to-react";

import HeadingLink from "./HeadingLink";

export const renderers: Options["components"] = {
  code: ({ node, inline, className, children, ...props }) => {
    /** https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight */
    const match = /language-(\w+)/.exec(className || "");
    const language = match?.[1];
    const childrenValue = String(children).replace(/\n$/, "");
    return !inline && match ? (
      <Box width="100%">
        <Flex alignItems="center">
          {language && <Code>{language}</Code>}
          <Button
            marginLeft="auto"
            colorScheme="green"
            height={6}
            padding={0}
            fontSize={12}
            textTransform="lowercase"
            onClick={() => navigator.clipboard.writeText(childrenValue)}
          >
            Copy
          </Button>
        </Flex>
      </Box>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  link: ({ href, node }) => {
    return (
      <ChakraLink href={href} isExternal wordBreak="break-word">
        {node.children[0].value as ReactNode}
      </ChakraLink>
    );
  },
  h1: ({ children }) => (
    <HeadingLink heading="h1">{String(children)}</HeadingLink>
  ),
  h2: ({ children }) => (
    <HeadingLink heading="h2">{String(children)}</HeadingLink>
  ),
  h3: ({ children }) => (
    <HeadingLink heading="h3">{String(children)}</HeadingLink>
  ),
  h4: ({ children }) => (
    <HeadingLink heading="h4">{String(children)}</HeadingLink>
  ),
  h5: ({ children }) => (
    <HeadingLink heading="h5">{String(children)}</HeadingLink>
  ),
  h6: ({ children }) => (
    <HeadingLink heading="h6">{String(children)}</HeadingLink>
  ),
};

export default renderers;
