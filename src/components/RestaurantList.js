import { useEffect, useState } from "react";
import { clearText, searchText } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantList = () => {

    // const [cardsView, setCardsView] = useState(cardData)
    const [cards, setCards] = useState([])
    const [searchKey, setSearchKey] = useState('');

    const [cardsView, setCardsView] = useState([]);

    useEffect(() => {
        console.log("printing inside useEffect")
        fetchRestaurants()
    }, []);

    const fetchRestaurants = async () => {

        const results = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonResult = await results.json()
        let restaurantsJson = []
        restaurantsJson = await jsonResult?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        let restaurants = []
        restaurants = await restaurantsJson.map((restaurant) => restaurant.info)
        setCardsView(restaurants)
        setCards(restaurants)

    }

    const handleFilter = () => {
        filteredCards = cardsView.filter(card => card.avgRating > 4)

        setCards(filteredCards)
    }

    const handleSearchChange = (event) => {
        setSearchKey(event.target.value)
        if ((event.target.value) === '') {
            setCards(cardsView)
        }
    }

    const handleSearch = () => {
        const searchResult = cardsView.filter(card => card.name.toLowerCase().includes(searchKey.toLowerCase()))

        setCards(searchResult)
    }

    return (
        <>
            <input type="search" value={searchKey} onChange={handleSearchChange}></input>
            <button onClick={handleSearch} disabled={searchKey === ''}>{searchText}</button>
            <button onClick={handleFilter}>Only 4+ stars</button>
            <button onClick={() => setCards(cardsView)}>{clearText}</button>
            <section className="page_section">
                {
                    cards.map((card, index) => {
                        return (
                            <Link to={`/restaurants/${card.id}`}>
                                <article key={index} className="restaurant_card">
                                    <h3>{card.name}</h3>
                                    <h5>{card.cuisines?.join(', ')}</h5>
                                    <h5>Rs {card.costForTwo}</h5>
                                    <h5>{card.avgRating}/5</h5>
                                </article>
                            </Link>
                        )
                    })
                }
            </section >
        </>
    );
};

export default RestaurantList;