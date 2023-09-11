import { useState } from "react";
import MenuAccordionItem from "./MenuAccordionItem";

const MenuAccordion = (props) => {

    const { menuList } = props;
    const [expandedAccordionItem, setExpandedAccordionItem] = useState(0);

    handleAccordionItemHeaderClick = (index) => {
        if (index === expandedAccordionItem) {
            setExpandedAccordionItem(-1)
        } else {

            setExpandedAccordionItem(index);
        }
    }

    return (
        <div>
            {menuList.map((item, index) => {
                return (
                    <MenuAccordionItem key={index} item={item} indexExpanded={expandedAccordionItem} selfIndex={index} handleAccordionItemHeaderClick={handleAccordionItemHeaderClick} />
                )
            })}
        </div>
    );
}

export default MenuAccordion;