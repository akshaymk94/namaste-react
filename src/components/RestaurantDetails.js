import StarIcon from "../utils/icons/starIcon";

const RestaurantDetails = (props) => {

    const { resDetails } = props;

    return (
        <div className="flex justify-between border-b-[1px] border-dashed border-gray-300 p-4">
            <div className="flex flex-col justify-between">
                <h1 className="font-semibold text-lg tracking-wide text-[#282c3f]">{resDetails.name}</h1>
                <div className="font-extralight text-xs text-[#7e808c]">
                    <h3>{resDetails.cuisines?.join(', ')}</h3>
                    <h3>{resDetails.areaName}, {resDetails.sla.lastMileTravelString}</h3>
                </div>
            </div>
            <div className="border rounded-lg p-2 divide-y-[1px]">
                <span className="flex align-baseline justify-center text-[#3d9b6d] pb-3">
                    <span>
                        <StarIcon />
                    </span>
                    <span className="font-black text-sm lg:text-md">
                        <strong>{resDetails.avgRating}</strong>
                    </span>
                </span>
                <span className="text-[10px] text-[#7e808c] font-extralight pt-3"><strong>{resDetails.totalRatingsString}</strong></span>
            </div>
        </div>
    );
}

export default RestaurantDetails;