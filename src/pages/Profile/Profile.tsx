import { Button } from "@material-ui/core";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
const Profile = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <Button
        onClick={() => {
          logout();
        }}
      >
        log out
      </Button>
    </div>
  );
};

export default Profile;
