import { useState, useEffect } from "react";
import { loginText, logoutText } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/custom_hooks/useOnlineStatus";

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onlineStatus = useOnlineStatus()

    return (
        <header>
            <h1 id="brandName">Namaste Food</h1>
            <ul id="navLinks">
                <li>
                    <p>Online status: {onlineStatus ? "online" : "offline"}</p>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About us</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact us</Link>
                </li>
                <button onClick={() => setIsLoggedIn(isLoggedIn ? false : true)}>{isLoggedIn ? logoutText : loginText}</button>
            </ul>
        </header>
    );
}

export default Header;