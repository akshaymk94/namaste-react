import { Link } from "react-router-dom";
import { restaurantImageUrl } from "../utils/constants";
import StarIcon from "../utils/icons/starIcon";

const RestaurantCard = ({ index, card }) => {
    const cloudinaryImageId = restaurantImageUrl(card.cloudinaryImageId)

    return (
        <Link key={index} to={`/restaurants/${card.id}`} data-testid="RestListCard" className="w-full">
            <>
                <div className="h-40">
                    <img className="w-full h-full object-cover rounded-2xl" src={cloudinaryImageId} alt="Restaurant Image" />
                </div>
                <div className="pl-4">
                    <h3 className="my-2 font-semibold text-lg text-gray-700 truncate">{card.name}</h3>
                    <h5 className="flex flex-row">
                        <div className="text-green-700">
                            <StarIcon />
                        </div>
                        <div>
                            {card.avgRating}
                        </div>
                    </h5>
                    <div className="text-gray-500 font-light text-md">
                        <h5 className="truncate">{card.cuisines?.join(', ')}</h5>
                        <h5>{card.areaName}</h5>
                    </div>
                </div>
            </>
        </Link>
    )
}

export default RestaurantCard;