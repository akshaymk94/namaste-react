import { restaurantImageUrl } from "../utils/assets_url/images";

const CollectionsBanner = ({ bannerInfo }) => {
    return (
        <div className='collectionBannerContainer'>
            <img src={restaurantImageUrl(bannerInfo.card?.card?.imageId)} />
        </div>
    );
}

export default CollectionsBanner;