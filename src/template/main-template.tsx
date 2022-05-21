import Box from "@mui/system/Box";
import { ReactNode, useContext } from "react";
import NavBar from "../components/NavBar";
import Login from "../pages/login";
import { Context } from "../states/Provider";

interface MainTemplateProps {
  children: ReactNode;
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  const [state] = useContext(Context);

  // If user is logged in, user can view other pages
  if (state.isLoggedIn) {
    return (
      <Box>
        <NavBar />
        <Box pt={2} px={8}>
          {children}
        </Box>
      </Box>
    );
  }
  // Else, only login is visible
  return <Login />;
};

export default MainTemplate;
