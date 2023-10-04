import { restaurantImageUrl } from "../utils/assets_url/images";
import { addBtnText } from "../utils/constants";
import { StopCircle } from "../utils/icons/StopCircle";

const CategoryListItem = (props) => {

    const { item } = props;
    const itemImageUrl = restaurantImageUrl(item.imageId)
    const isVegetarian = (item.itemAttribute.vegClassifier === "VEG") ? true : false;

    return (
        <div className="border-b py-6 flex">
            <div className="w-10/12 pr-6">
                <div className="mb-3">
                    <div className={isVegetarian ? "text-green-700" : "text-red-700"}><StopCircle /></div>
                    <h3 className="font-medium">{item.name}</h3>
                    <h5 className="text-sm font-light">&#8377; {item.price / 100}</h5>
                </div>
                <div>
                    <p className="text-xs font-extralight">{item.description}</p>
                </div>
            </div>
            <div className="w-2/12 flex flex-col items-center">
                <img src={itemImageUrl} className="rounded-lg w-fit" />
                <button className="py-2 w-9/12 mt-[-1rem] bg-white text-green-600 text-xs font-medium rounded-md border">{addBtnText}</button>
            </div>
        </div>
    );
}

export default CategoryListItem;