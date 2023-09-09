import CategoryListItem from "./CategoryListItem";

const CategoryList = (props) => {
    const { itemCards } = props;

    return (
        itemCards.map((item) => {
            return (
                <CategoryListItem item={item?.card?.info} />
            );
        })
    );
}

export default CategoryList;