import { useState } from "react";
import { ChevronDown } from "../utils/icons/Chevron";
import CategoryList from "./CategoryList";

const MenuAccordionItem = (props) => {

    const { title, itemCards } = props.item?.card?.card;
    const { indexExpanded, selfIndex } = props;

    return (
        <div className="mt-1 bg-gray-50 border-b-[16px] border-b-gray-200" onClick={() => props.handleAccordionItemHeaderClick(selfIndex)}>
            {/** 
             * Contains Accordion Items
             * Loop through list of categories to display Accordion Items
             * Each Accordion Item is a list of dishes of its own category
             */}

            {/* Accordion Header */}
            <div className="py-3 text-gray-800 flex justify-between cursor-pointer">
                <h3 className="font-bold ">{title}</h3>
                <h3><ChevronDown /></h3>
            </div>

            {/* Accordion Body */}

            {
                (indexExpanded === selfIndex) &&
                (<div>
                    <CategoryList itemCards={itemCards} />
                </div>)
            }
        </div>
    );
}

export default MenuAccordionItem;