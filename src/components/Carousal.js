import CarousalList from "./CarousalList";
import SectionTitle from "./SectionTitle";

const Carousal = (props) => {

    const { carousalList, sectionConfig, isRestaurant } = props;

    return (
        <div className="mb-9 px-3 flex flex-col">
            <SectionTitle sectionTitle={sectionConfig.title} />
            <CarousalList carousalList={carousalList} sectionConfig={sectionConfig} isRestaurant={isRestaurant} />
        </div>
    )
}

export default Carousal;