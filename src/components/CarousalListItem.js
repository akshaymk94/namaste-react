import { restaurantImageUrl } from "../utils/assets_url/images";
import { isSmallScreen } from "../utils/utils";

const CarousalListItem = (props) => {
    const { item, sectionConfig } = props;

    itemImageUrl = restaurantImageUrl(item?.imageId)

    return (
        <div className="flex-shrink-0">
            <img className={isSmallScreen ? sectionConfig.sectionHeightMobile : sectionConfig.sectionHeight} src={itemImageUrl} />
        </div>
    )
}

export default CarousalListItem;