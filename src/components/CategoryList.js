import CategoryListItem from "./CategoryListItem";

const CategoryList = (props) => {
    const { itemCards } = props;

    return (
        itemCards.map((item, index) => {
            return (
                <CategoryListItem key={index} item={item?.card?.info} />
            );
        })
    );
}

export default CategoryList;