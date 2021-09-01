import { createContext } from "react";

const UserContext = createContext({
  email: "",
  firstName: "",
  id: "",
  lastName: "",
  phoneNumber: 0,
});

export default UserContext;
