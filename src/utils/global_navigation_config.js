import { BoltOutline } from "./icons/Bolt";
import { CartOutline } from "./icons/CartIcon";
import { LifebouyOutline } from "./icons/Lifebuoy";
import { LocationOutline, LocationSolid } from "./icons/Location";
import { SearchOutline } from "./icons/Search";
import { UserOutline } from "./icons/User";

const sizingWeb = {
    width: "w-5",
    height: "w-5"
}

export const brandIconMobileConfig = {
    link: "/",
    icon: <LocationOutline width="w-5" height="w-5" />,
}

export const brandNameConfig = {
    title: "Swaggy",
    link: "/",
    icon: <LocationSolid width="w-10" height="w-10" />,
}

export const globalNavItemsMobile = [
    {
        title: "Offers",
        link: "/offers-near-me",
        icon: <BoltOutline {...sizingWeb} />,
    },
]

export const globalNavigationItems = [
    {
        title: "Search",
        link: "/search",
        icon: <SearchOutline {...sizingWeb} />,
    },
    {
        title: "Offers",
        link: "/offers-near-me",
        icon: <BoltOutline {...sizingWeb} />,
    },
    {
        title: "Help",
        link: "/support",
        icon: <LifebouyOutline {...sizingWeb} />,
    },
    {
        title: "Sign In",
        link: "/signin",
        icon: <UserOutline {...sizingWeb} />,
    },
    {
        title: "Cart",
        link: "/checkout",
        icon: <CartOutline {...sizingWeb} />
    },
]