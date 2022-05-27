import {
  Box,
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();

  const toggleIcon = useColorModeValue(<BsMoon />, <BsSun />);

  return (
    <Box>
      <Tooltip label="theme toggle">
        <IconButton
          aria-label="toggle theme mode"
          icon={toggleIcon}
          onClick={toggleColorMode}
          backgroundColor="transparent"
        />
      </Tooltip>
    </Box>
  );
};

export default ThemeToggle;
