import * as React from "react";
import { useAuth } from "components/contexts/AuthContext";

function Logout(props) {
  const { logout } = useAuth();

  return (
    <>
      <button onClick={() => logout()}>Log out</button>
    </>
  );
}

export default Logout;
