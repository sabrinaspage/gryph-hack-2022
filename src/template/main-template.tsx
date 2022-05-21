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
      {children}
    </Box>
  );
};

export default MainTemplate;
