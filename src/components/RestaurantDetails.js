import StarIcon from "../utils/icons/starIcon";

const RestaurantDetails = (props) => {

    const { resDetails } = props;

    return (
        <div className="flex justify-between border-b-[1px] border-dashed border-gray-300 py-4">
            <div className="flex flex-col justify-between">
                <h1 className="font-bold text-lg tracking-wide">{resDetails.name}</h1>
                <div className="font-extralight text-sm">
                    <h3>{resDetails.cuisines?.join(', ')}</h3>
                    <h3>{resDetails.areaName}</h3>
                </div>
            </div>
            <div className="border rounded-lg p-2 divide-y-[1px]">
                <h3 className="font-bold text-md flex align-baseline pb-3 text-green-700">
                    <StarIcon />{resDetails.avgRating}
                </h3>
                <h3 className="text-[10px] font-extralight pt-3">{resDetails.totalRatingsString}</h3>
            </div>
        </div>
    );
}

export default RestaurantDetails;