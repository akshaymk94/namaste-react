import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = (props) => {
    const [cards, setCards] = useState(props.restaurants);
    const { sectionConfig } = props;

    // const [cardsView, setCardsView] = useState(props.restaurants);

    // useEffect(() => {
    //     fetchRestaurants();
    // }, []);

    // useEffect(() => {
    //     handleSearch()
    // }, [searchKey]);

    // const fetchRestaurants = async () => {
    //     try {
    //         const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //         const jsonResult = await response.json();
    //         const restaurantsJson = jsonResult?.data?.cards.filter((card) => card.card.card.id === 'restaurant_grid_listing')[0].card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    //         const restaurants = restaurantsJson.map(restaurant => restaurant.info);
    //         setCardsView(restaurants);
    //         setCards(restaurants);
    //     } catch (error) {
    //         console.error("Error fetching restaurants:", error);
    //     }
    // };

    // const handleSearchChange = event => {
    //     const value = event.target.value;
    //     setSearchKey(value);
    // };

    // const handleSearch = () => {

    //     if (!searchKey.trim() === '') {
    //         setCards(cardsView)
    //     } else {
    //         const searchResult = cardsView.filter(card =>
    //             card.name.toLowerCase().includes(searchKey.toLowerCase())
    //         );
    //         setCards(searchResult);
    //     }
    // };

    return (
        <div className="mb-9 flex flex-col">
            <SectionTitle sectionTitle={sectionConfig.title} />
            <section data-testid="RestList" className="grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
                {cards.map((card, index) => {
                    return <RestaurantCard index={index} card={card} />
                })}
            </section>
        </div>);
};

export default RestaurantList;