import { Box, Stack } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      backgroundColor="background"
      color="text"
      minHeight="100vh"
      paddingBottom={[160, 16]}
      paddingTop={24}
      transition="0.4s ease-out"
    >
      <Header />
      <Stack
        direction="column"
        alignItems="center"
        position="relative"
        zIndex={1}
        spacing={8}
      >
        <Box as="main" layerStyle="layoutBlock">
          {children}
        </Box>
      </Stack>
    </Box>
  );
};

export default Layout;
