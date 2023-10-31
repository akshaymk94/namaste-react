import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantDetails from "./RestaurantDetails";
import MenuAccordion from "./MenuAccordion";
import { isSmallScreen } from "../utils/utils";
import { build_collections_mapi } from "../utils/api_urls/collections_api";
import { build_restaurant_menu_dapi, build_restaurant_menu_mapi } from "../utils/api_urls/restaurant_menu_api";

const RestaurantMenu = () => {

    const [resDetails, setResDetails] = useState(null);
    const [menuList, setMenuList] = useState([]);
    const { id } = useParams();

    const restaurantMenuParams = {
        id: id
    }

    useEffect(() => {
        fetchRestaurantDetails()
    }, []);

    const fetchRestaurantDetails = async () => {

        const uri = isSmallScreen ? build_restaurant_menu_mapi(restaurantMenuParams) : build_restaurant_menu_dapi(restaurantMenuParams)

        try {
            const response = await fetch(uri)

            const responseJson = await response.json()

            const restaurantDetails = responseJson?.data?.cards[0]?.card?.card?.info


            const menuListFetched = responseJson?.data?.cards?.find(card => Object.keys(card).includes('groupedCard')).groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((card) => {
                return card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

            })

            setResDetails(restaurantDetails)
            setMenuList(menuListFetched)
        } catch (error) {
            console.log('Error while fetching Restaurant Menu: ', error)
        }

    }

    return (
        (resDetails === null ? "Loading..." :
            <div className="w-full lg:w-6/12 m-auto lg:pt-8">
                <RestaurantDetails resDetails={resDetails} />
                <MenuAccordion menuList={menuList} />
            </div>)
    )
}

export default RestaurantMenu;