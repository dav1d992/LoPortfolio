import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";

import { components } from "./components";
import { config } from "./config";
import { fonts } from "./fonts";
import { layerStyles } from "./layerStyles";
import { semanticTokens } from "./SemanticTokens";
import { styles } from "./styles";

const customTheme = extendTheme({
  fonts,
  components,
  config,
  layerStyles,
  styles,
  semanticTokens,
  colors,
});

export default customTheme;
