import React, { useEffect, useState } from "react";
import { searchText, clearText } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantList = () => {
    const [cards, setCards] = useState([]);
    const [cardsView, setCardsView] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    useEffect(() => {
        console.log("Inside useEffect");
        fetchRestaurants();
    }, []);

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
        if (!value) {
            setCards(cardsView);
        }
    };

    const handleSearch = () => {
        const searchResult = cardsView.filter(card =>
            card.name.toLowerCase().includes(searchKey.toLowerCase())
        );
        setCards(searchResult);
    };

    const resetCards = () => {
        setCards(cardsView);
        setSearchKey('');
    };

    return (
        <>
            <input
                type="search"
                value={searchKey}
                onChange={handleSearchChange}
            />
            <button onClick={handleSearch} disabled={!searchKey}>
                {searchText}
            </button>
            <button onClick={handleFilter}>Only 4+ stars</button>
            <button onClick={resetCards}>{clearText}</button>
            <section className="page_section">
                {cards.map((card, index) => (
                    <Link key={index} to={`/restaurants/${card.id}`}>
                        <article className="restaurant_card">
                            <h3>{card.name}</h3>
                            <h5>{card.cuisines?.join(', ')}</h5>
                            <h5>Rs {card.costForTwo}</h5>
                            <h5>{card.avgRating}/5</h5>
                        </article>
                    </Link>
                ))}
            </section>
        </>
    );
};

export default RestaurantList;