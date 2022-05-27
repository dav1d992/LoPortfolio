import type { DeepPartial, SemanticValue, ThemeScale } from "@chakra-ui/react";

export type TokenValue = string | number | SemanticValue<string>;

export type ThemeTokenValues = Record<string, TokenValue>;

export type SemanticTokenType = DeepPartial<
  Record<ThemeScale, ThemeTokenValues>
>;

export const semanticTokens: SemanticTokenType = {
  colors: {
    text: {
      default: "brand.900",
      _dark: "brand.200",
    },
    background: {
      default: "brand.50",
      _dark: "brand.800",
    },
    headerAlphaBackground: {
      default: "brand.50 50%",
      _dark: "brand.800 50%",
    },
    cardBorder: {
      default: "gray.100",
      _dark: "gray.700",
    },
    buttonBackground: {
      default: "gray.300",
      _dark: "gray.500",
    },
  },
};
