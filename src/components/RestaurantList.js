import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = (props) => {
    const [cards, setCards] = useState(props.restaurants);
    const { sectionConfig } = props;

    return (
        <div className="mb-9 px-3 flex flex-col">
            <SectionTitle sectionTitle={sectionConfig.title} />
            <section data-testid="RestList" className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
                {cards.map((card, index) => {
                    return <RestaurantCard index={index} card={card} />
                })}
            </section>
        </div>);
};

export default RestaurantList;