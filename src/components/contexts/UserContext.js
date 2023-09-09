import { createContext } from "react";

const UserContext = createContext({
    firstname: "John",
    lastname: "Smith",
    username: "jsmith",
    userId: "USER20230906121200"
});

export default UserContext;