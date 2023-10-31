import { useEffect, useState } from "react";
import { isSmallScreen } from "../utils/utils";
import { build_collections_dapi, build_collections_mapi } from "../utils/api_urls/collections_api";
import { COLLECTION_BANNER_TYPE, COLLECTION_RESTAURANT_TYPE } from "../utils/info_types";
import CollectionsBanner from "./CollectionsBanner";
import { useParams } from "react-router-dom";
import RestaurantList from "./RestaurantList";

const Collections = () => {

    const { collectionId } = useParams();

    const [bannerInfo, setBannerInfo] = useState({})
    const [collectionsSummary, setCollectionsSummary] = useState({})
    const [restaurantsInCollection, setRestaurantsInCollection] = useState([])

    const collectionsParams = {
        id: collectionId
    }

    useEffect(() => {
        fetchCollectionsInfo()
    }, [])

    // fetch the collections information and display it in the collections page
    const fetchCollectionsInfo = async () => {

        const uri = isSmallScreen ? build_collections_mapi(collectionsParams) : build_collections_dapi(collectionsParams)
        try {
            let response = await fetch(uri);
            const jsonResult = await response.json();

            const cards = jsonResult?.data?.cards || undefined;
            const bannerInfo = cards?.find(card => card?.card?.card?.['@type'].includes(COLLECTION_BANNER_TYPE))
            const restaurants = cards?.filter(card => card?.card?.card?.['@type'].includes(COLLECTION_RESTAURANT_TYPE)).map(card => card?.card?.card?.info)

            setBannerInfo(bannerInfo)
            setRestaurantsInCollection(restaurants)
        } catch (error) {
            console.log('Error while fetching collections information: ', error)
        }
    }

    return (
        <div>
            {/* Mobile view has Collections Banner Image */}
            {
                isSmallScreen &&
                <div className="mb-16">
                    <CollectionsBanner bannerInfo={bannerInfo} />
                </div>
            }
            {/* Title and Description of the collection */}
            {/* Sort and Filter - Future Enhancement */}
            {/* Restaurant List Componenet with Section title and Restaurant list */}

            <div className="px-3">
                <RestaurantList restaurants={restaurantsInCollection} />
            </div>

        </div>
    );
}

export default Collections;