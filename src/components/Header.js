import { useState, useContext } from "react";
import { signinText, signoutText } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/custom_hooks/useOnlineStatus";
import UserContext from "./contexts/UserContext";
import { useSelector } from "react-redux";
import { Cart } from "../utils/icons/CartIcon";

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onlineStatus = useOnlineStatus()

    const { firstname, lastname } = useContext(UserContext)

    const { items } = useSelector((store) => store.cart)

    return (
        <div className="border-none p-5 shadow-lg shadow-gray-100 bg-white">
            <header className="flex items-center justify-between w-10/12 m-auto">
                <Link to="/">
                    <h1 className="font-bold text-3xl text-[#ff851b]">Swaggy</h1>
                </Link>
                <ul className="flex text-gray-700 font-medium">
                    <li key={2} className="px-5">
                        <Link to="/">Home</Link>
                    </li>
                    <li key={3} className="px-5">
                        <Link to={"/about"}>Offers</Link>
                    </li>
                    <li key={4} className="px-5">
                        <Link to={"/contact"}>Help</Link>
                    </li>
                    <li key={5} className="px-5">
                        <button onClick={() => setIsLoggedIn(isLoggedIn ? false : true)}>{isLoggedIn ? signoutText : signinText}</button>
                    </li>
                    <li key={6} className="px-5">
                        <Link to={"/cart"} className="flex"><Cart />{items.length > 0 && `${items.length}`}</Link>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default Header;