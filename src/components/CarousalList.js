import CarousalListItem from "./CarousalListItem";
import RestaurantCard from "./RestaurantCard";

const CarousalList = (props) => {

    const { carousalList, sectionConfig, isRestaurant } = props;

    // if restaurant list then display restaurant cards
    // else display carousalitem
    return (
        <div className="flex flex-row gap-6 overflow-x-auto" >
            {
                carousalList.map((item, index) =>
                    isRestaurant ?
                        <div className="w-1/3 lg:w-1/4 flex-shrink-0">
                            <RestaurantCard index={index} card={item} />
                        </div> :
                        <CarousalListItem item={item} sectionConfig={sectionConfig} />
                )
            }
        </div>

    )
}

export default CarousalList;