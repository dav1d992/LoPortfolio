import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();

  const toggleIcon = useColorModeValue(<BsMoon />, <BsSun />);

  return (
    <Box>
      <IconButton
        aria-label="toggle theme mode"
        title="theme toggle"
        icon={toggleIcon}
        onClick={toggleColorMode}
        backgroundColor="transparent"
      />
    </Box>
  );
};

export default ThemeToggle;
