import { BoltOutline } from "./icons/Bolt";
import { CartOutline } from "./icons/CartIcon";
import { LifebouyOutline } from "./icons/Lifebuoy";
import { LocationOutline, LocationSolid } from "./icons/Location";
import { SearchOutline } from "./icons/Search";
import { UserOutline } from "./icons/User";
import { isSmallScreen } from "./utils";

const sizingWeb = {
    width: "w-5",
    height: "w-5"
}

const isHidden = isSmallScreen ? true : false;

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
        isHidden: isHidden,
    },
]

export const globalNavigationItems = [
    {
        title: "Search",
        link: "/search",
        icon: <SearchOutline {...sizingWeb} />,
        visibilityStyles: 'max-lg:hidden',
    },
    {
        title: "Offers",
        link: "/offers-near-me",
        icon: <BoltOutline {...sizingWeb} />,
        visibilityStyles: 'visible',
    },
    {
        title: "Help",
        link: "/support",
        icon: <LifebouyOutline {...sizingWeb} />,
        visibilityStyles: 'max-lg:hidden',
    },
    {
        title: "Sign In",
        link: "/signin",
        icon: <UserOutline {...sizingWeb} />,
        visibilityStyles: 'max-lg:hidden',
    },
    {
        title: "Cart",
        link: "/checkout",
        icon: <CartOutline {...sizingWeb} />,
        visibilityStyles: 'max-lg:hidden',
    },
]