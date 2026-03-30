import type { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "1rem",
    _hover: {
      transform: "translateY(-2px) scale(1.02, 1.02)",
      borderColor: "brand.500",
      borderWidth: 2,
      shadow: "sm",
    },
  },
};
