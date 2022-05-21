import Box from "@mui/system/Box";
import { ReactNode } from "react";
import theme from "../styles/theme";
import NavBar from "../components/NavBar";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

interface MainTemplateProps {
  children: ReactNode;
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavBar />
        <Box pt={2} px={8}>
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MainTemplate;
