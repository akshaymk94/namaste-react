import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantDetails from "./RestaurantDetails";
import MenuAccordion from "./MenuAccordion";

const RestaurantMenu = () => {

    const [resDetails, setResDetails] = useState(null);
    const [menuList, setMenuList] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchRestaurantDetails()
    }, []);

    const fetchRestaurantDetails = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + id + "&catalog_qa=undefined&submitAction=ENTER")

        const responseJson = await response.json()

        const restaurantDetails = responseJson?.data?.cards[0]?.card?.card?.info


        const menuListFetched = responseJson?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((card) => {
            return card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

        })

        setResDetails(restaurantDetails)
        setMenuList(menuListFetched)
    }

    return (
        (resDetails === null ? "Loading..." :
            <div className="w-6/12 m-auto pt-8">
                <RestaurantDetails resDetails={resDetails} />
                <MenuAccordion menuList={menuList} />
            </div>)
    )
}

export default RestaurantMenu;