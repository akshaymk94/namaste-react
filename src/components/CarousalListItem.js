import { restaurantImageUrl } from "../utils/constants";

const CarousalListItem = (props) => {
    const { item, sectionConfig } = props;
    itemImageUrl = restaurantImageUrl(item?.imageId)

    return (
        <div className="flex-shrink-0">
            <img className={sectionConfig.sectionHeight} src={itemImageUrl} />
        </div>
    )
}

export default CarousalListItem;