export const build_collections_mapi = (collectionParams) => `https://www.swiggy.com/mapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=${collectionParams.id}&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1`

export const build_collections_dapi = (collectionParams) => `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=${collectionParams.id}&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null`