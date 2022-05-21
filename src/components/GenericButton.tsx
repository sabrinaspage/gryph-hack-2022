import Button from "@mui/material/Button";
import { ReactNode } from "react";

interface GenericButtonProps {
  children: ReactNode;
}

const GenericButton = ({ children }: GenericButtonProps) => {
	return <Button>{children}</Button>;
};

export default GenericButton;
