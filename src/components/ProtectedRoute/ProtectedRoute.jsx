import PropTypes from "prop-types";
import { useGlobalContext } from "../../context/useGlobalContext";
import { Navigate } from "react-router";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useGlobalContext();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
