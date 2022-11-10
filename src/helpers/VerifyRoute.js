import { Navigate } from "react-router-dom";

import { history } from "./history";

export { VerifyRoute };

function VerifyRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("User"));

  if (user.User.email_is_verified === false) {
    return <Navigate to="/verifymobile" state={{ from: history.location }} />;
  }

  

  // authorized so return child components
  return children;
}
