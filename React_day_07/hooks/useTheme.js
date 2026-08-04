import { useContext } from "react";
import { darkModeContext } from "../contexts/contextProvider";

export const useTheme = () => useContext(darkModeContext);