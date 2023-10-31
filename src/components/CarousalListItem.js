import { Link } from "react-router-dom";
import { restaurantImageUrl } from "../utils/assets_url/images";
import { isSmallScreen, getPathName } from "../utils/utils";

const CarousalListItem = (props) => {
    const { item, sectionConfig } = props;

    itemImageUrl = restaurantImageUrl(item?.imageId)

    return (
        <div className="flex-shrink-0">
            <Link to={getPathName(item?.action?.link)}>
                <img className={isSmallScreen ? sectionConfig.sectionHeightMobile : sectionConfig.sectionHeight} src={itemImageUrl} />
            </Link>
        </div>
    )
}

export default CarousalListItem;