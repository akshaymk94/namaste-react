import { Link } from "react-router-dom";
import StarIcon from "../utils/icons/starIcon";
import { restaurantImageUrl } from "../utils/assets_url/images";

const RestaurantCard = ({ index, card }) => {
    const cloudinaryImageId = restaurantImageUrl(card.cloudinaryImageId)

    return (
        <Link key={index} to={`/restaurants/${card.id}`} data-testid="RestListCard" className="">
            <>
                <div className="h-40">
                    <img className="w-full h-full object-cover rounded-2xl" src={cloudinaryImageId} alt="Restaurant Image" />
                </div>
                <div className="lg:pl-4">
                    <h3 className="mt-1 lg:my-2 font-semibold lg:text-lg text-gray-600 lg:text-gray-700 truncate">{card.name}</h3>
                    <h5 className="flex flex-row">
                        <div className="text-green-700">
                            <StarIcon />
                        </div>
                        <div className="text-sm">
                            {card.avgRating}
                        </div>
                    </h5>
                    <div className="text-gray-500 font-light text-[13px] lg:text-base">
                        <h5 className="truncate">{card.cuisines?.join(', ')}</h5>
                        <h5>{card.areaName}</h5>
                    </div>
                </div>
            </>
        </Link>
    )
}

export default RestaurantCard;