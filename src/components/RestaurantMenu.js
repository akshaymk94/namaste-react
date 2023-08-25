import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [resDetails, setResDetails] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchRestaurantDetails()
    }, []);

    const fetchRestaurantDetails = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + id + "&catalog_qa=undefined&submitAction=ENTER")

        const responseJson = await response.json()

        const restaurantDetails = responseJson?.data?.cards[0]?.card?.card?.info

        console.log(restaurantDetails)
        setResDetails(restaurantDetails)
    }

    return (
        (resDetails === null ? "Loading..." :
            <>
                <h1>{resDetails.name}</h1>
                <h3>{resDetails.areaName}</h3>


            </>)
    )
}

export default RestaurantMenu;