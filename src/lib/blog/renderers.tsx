import { Box, Link as ChakraLink } from "@chakra-ui/react";
import type { Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

import HeadingLink from "./HeadingLink";

export const Renderers: Components = {
  code: ({ className, children, ...props }) => {
    /** https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight */
    const match = /language-(\w+)/.exec(className || "");
    const language = match?.[1];
    const childrenValue = String(children).replace(/\n$/, "");
    return match ? (
      <Box marginBottom={10} marginTop={-5} width="100%">
        <SyntaxHighlighter
          language={language}
          showLineNumbers={false}
          style={dracula}
        >
          {childrenValue}
        </SyntaxHighlighter>
      </Box>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  link: ({ href, children }) => {
    return (
      <ChakraLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        wordBreak="break-word"
      >
        {children}
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

export default Renderers;
