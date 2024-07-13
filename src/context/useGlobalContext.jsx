import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

// CONTEXT
export const useGlobalContext = () => useContext(GlobalContext);
