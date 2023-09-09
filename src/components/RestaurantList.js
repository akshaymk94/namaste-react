import React, { useEffect, useState } from "react";
import { searchText, clearText, restaurantImageUrl } from "../utils/constants";
import { Link } from "react-router-dom";
import StarIcon from "../utils/icons/starIcon";

const RestaurantList = () => {
    const [cards, setCards] = useState([]);
    const [cardsView, setCardsView] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    useEffect(() => {
        fetchRestaurants();
    }, []);

    useEffect(() => {
        handleSearch()
    }, [searchKey]);

    const fetchRestaurants = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const jsonResult = await response.json();
            const restaurantsJson = jsonResult?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            const restaurants = restaurantsJson.map(restaurant => restaurant.info);
            setCardsView(restaurants);
            setCards(restaurants);
        } catch (error) {
            console.error("Error fetching restaurants:", error);
        }
    };

    const handleFilter = () => {
        const filteredCards = cardsView.filter(card => card.avgRating > 4);
        setCards(filteredCards);
    };

    const handleSearchChange = event => {
        const value = event.target.value;
        setSearchKey(value);
    };

    const handleSearch = () => {

        if (!searchKey.trim() === '') {
            setCards(cardsView)
        } else {
            const searchResult = cardsView.filter(card =>
                card.name.toLowerCase().includes(searchKey.toLowerCase())
            );
            setCards(searchResult);
        }
    };

    const resetCards = () => {
        setCards(cardsView);
        setSearchKey('');
    };

    return (
        <div className="p-7 w-9/12 m-auto">
            <div className="mt-3 mb-10 flex flex-row items-center">
                <input
                    id="searchRestaurants"
                    type="text"
                    value={searchKey}
                    onChange={handleSearchChange}
                    placeholder="Search for Restaurants"
                    className="border-0 border-gray-200 shadow-lg rounded-3xl pl-5 py-3 w-full outline-none"
                />
            </div>
            <section className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {cards.map((card, index) => {
                    const cloudinaryImageId = restaurantImageUrl(card.cloudinaryImageId)
                    return (<Link key={index} to={`/restaurants/${card.id}`}>
                        <>
                            <img className="object-none w-full h-48 rounded-3xl" src={cloudinaryImageId} alt="Restaurant Image" />
                            <h3 className="my-3 font-bold text-xl">{card.name}</h3>
                            <h5 className="flex">
                                <StarIcon />{card.avgRating}</h5>
                            <div className="text-gray-600">
                                <h5>{card.cuisines?.slice(0, 3).join(', ')}</h5>
                                <h5>Rs {card.costForTwo}</h5>
                            </div>
                        </>
                    </Link>)
                })}
            </section>
        </div>);
};

export default RestaurantList;