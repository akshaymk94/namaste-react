
import { Link } from "react-router-dom";
import { globalNavItemsMobile, globalNavigationItems, brandNameConfig as brand, brandIconMobileConfig as brandMobile } from "../utils/global_navigation_config";
import { hasTouchScreen } from "../utils/utils";

const Header = () => {

    const isSmallScreen = window.innerWidth < 1024 ? true : false;

    const navItems = isSmallScreen ? globalNavItemsMobile : globalNavigationItems;

    return (
        <div className="
            fixed top-0 left-0 w-screen h-[60px]
            px-4 py-3 
            flex items-center justify-between
            max-lg:border max-lg:border-b-[1px]
            shadow-lg shadow-gray-100
            bg-white
            lg:h-20
            ">

            <header className="
                w-full
                grid grid-cols-4 gap-1
                lg:w-full
                lg:mx-auto
                lg:grid-cols-12
                xl:w-10/12">
                <div className="flex justify-center max-lg:hidden">
                    <Link to={brand.link}>
                        <span className={"text-[#ff851b]"}>{brand.icon}</span>
                    </Link>
                </div>
                <div className="flex flex-nowrap max-lg:col-span-3 shrink-0 lg:items-center lg:col-span-5">

                    <button className="flex flex-col shrink-0 w-full lg:flex-row lg:items-center">
                        <div className="flex items-center max-lg:pb-1">
                            <span className="lg:hidden">
                                {brandMobile.icon}
                            </span>
                            <span className="font-extrabold text-gray-700 tracking-wide ml-1 text-md lg:border-b-2 lg:border-b-gray-700 lg:text-sm">Other</span>
                        </div>
                        <span className="
                        text-gray-500 text-xs text-left tracking-wide
                        pl-1 w-[80%] truncate
                        lg:text-sm
                        lg:pl-3
                        ">
                            Koramangala, Bengaluru, Karnataka, India
                        </span>
                    </button>
                </div>
                <ul className="flex flex-row items-center justify-end lg:justify-between lg:col-span-6">
                    {
                        navItems.map((navItem) => {
                            return (
                                <li key={2} className="hover:text-[#ff851b] md:px-5">
                                    <Link to={navItem.link} className="flex flex-row items-center justify-between">
                                        <span className="pr-2">{navItem.icon}</span>
                                        <span className="font-semibold lg:font-medium text-sm lg:text-md lg:tracking-wider">{navItem.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* <h1 className="font-bold text-3xl text-[#ff851b]">Swaggy</h1> */}

                {/*  <ul className="flex text-gray-700 font-medium w-6/12 justify-between">
                    {
                        globalNavigationItems.map((navItem) => {
                            return (
                                <li key={2} className="px-5 hover:text-[#ff851b]">
                                    <Link to={navItem.link} className="flex flex-row items-center justify-between">
                                        <span className="pr-2">{navItem.icon}</span>
                                        <span>{navItem.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>*/ }
            </header>
        </div >
    );
}

export default Header;