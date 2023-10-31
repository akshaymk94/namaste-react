import { useEffect, useState } from "react";
import Carousal from "./Carousal";
import RestaurantList from "./RestaurantList";
import { BEST_OFFERS, RESTAURANTS_ONLINE, DISH_CATEGORY, TOP_RESTAURANTS } from "../utils/food_home_section_config";
import { get_restaurants_desktop_uri, get_restaurants_mobile_uri } from "../utils/api_urls/restaurant_list_api";
import { hasTouchScreen, isSmallScreen } from "../utils/utils";

const FoodHome = () => {

    const [topicalBanner, setTopicalBanner] = useState([])
    const [dishCategories, setDishCategories] = useState([])
    const [topRestaurantChains, setTopRestaurantChains] = useState([])
    const [restaurantsOnlineDelivery, setRestaurantsOnlineDelivery] = useState([])
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        const uri = isSmallScreen ? get_restaurants_mobile_uri : get_restaurants_desktop_uri;

        try {
            const response = await fetch(uri);
            const jsonResult = await response.json();
            const topicalBanner = jsonResult?.data?.cards.filter((card) => card.card.card.id === 'topical_banner')[0].card?.card?.gridElements?.infoWithStyle?.info || [];
            const dishCategories = jsonResult?.data?.cards.filter((card) => card.card.card.id === 'whats_on_your_mind')[0].card?.card?.imageGridCards?.info || [];
            const topRestaurantChains = jsonResult?.data?.cards.filter((card) => card.card.card.id === 'top_brands_for_you')[0].card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            const restaurantsJson = jsonResult?.data?.cards.filter((card) => card.card.card.id === 'restaurant_grid_listing')[0].card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            const topRestaurants = topRestaurantChains.map(restaurant => restaurant.info);
            const restaurants = restaurantsJson.map(restaurant => restaurant.info);
            setTopicalBanner(topicalBanner)
            setDishCategories(dishCategories)
            setTopRestaurantChains(topRestaurants)
            setRestaurantsOnlineDelivery(restaurants)
            setFetching(false)

        } catch (error) {
            console.error("Error fetching restaurants:", error);
        }
    };

    return (
        <>
            {
                fetching ?
                    <h3>Loading...</h3> :
                    <div>
                        <Carousal carousalList={topicalBanner} sectionConfig={BEST_OFFERS} isRestaurant={false} />
                        <Carousal carousalList={dishCategories} sectionConfig={DISH_CATEGORY} isRestaurant={false} />
                        <div className="border-b-2 w-full my-8 border-[#F0F0F5]"></div>
                        <Carousal carousalList={topRestaurantChains} sectionConfig={TOP_RESTAURANTS} isRestaurant={true} />
                        <div className="border-b-2 w-full my-8 border-[#F0F0F5]"></div>
                        <RestaurantList restaurants={restaurantsOnlineDelivery} sectionConfig={RESTAURANTS_ONLINE} />
                    </div>
            }

        </>
    )

}

export default FoodHome;