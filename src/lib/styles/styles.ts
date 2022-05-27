import type { DeepPartial, Theme } from "@chakra-ui/react";

export const styles: DeepPartial<Theme["styles"]> = {
  global: (props) => ({
    /**
     * custom scrollbar
     * https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar#browser_compatibility
     */
    "::-webkit-scrollbar": {
      width: "1rem",
      height: "1rem",
      backgroundColor: props.colorMode === "light" ? "brand.300" : "brand.900",
    },
    "::-webkit-scrollbar-thumb": {
      borderRadius: "full",
      backgroundColor: props.colorMode === "light" ? "brand.400" : "brand.700",
      "&:hover": {
        backgroundColor: props.colorMode === "light" ? "brand.500" : "brand.600",
      },
    },
    /**
     * firefox scrollbar
     * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scrollbars#browser_compatibility
     */
    html: {
      scrollbarWidth: "thin",
      scrollbarColor: `${props.colorMode === "light" ? "#A0AEC0" : "#2D3748"} ${
        props.colorMode === "light" ? "#CBD5E0" : "black"
      }`,
    },
  }),
};
