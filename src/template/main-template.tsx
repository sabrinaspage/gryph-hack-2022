import Box from "@mui/system/Box";
import { ReactNode } from "react";
import NavBar from "../components/NavBar";

interface MainTemplateProps {
  children: ReactNode;
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <Box>
      <NavBar />
      <Box pt={2} px={2}>
        {children}
      </Box>
    </Box>
  );
};

export default MainTemplate;
