import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantList from "../components/RestaurantList";
import MOCK_DATA from './mocks/restaurantListMock.json'
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve(MOCK_DATA)
    }
    )
);

it("should load Restaurant List component", async () => {

    await (act(async () => render(<BrowserRouter><RestaurantList /></BrowserRouter>)))

    const section = screen.getByTestId('RestList');

    expect(section).toBeInTheDocument();

})

it("should search and filter restaurants based on search string", async () => {
    await (act(async () => render(<BrowserRouter><RestaurantList /></BrowserRouter>)))

    const section = screen.getByTestId('RestList');
    const restListCards = screen.getAllByTestId('RestListCard')

    expect(section).toBeInTheDocument();
    expect(restListCards.length).toBe(9)

    const searchInput = screen.getByTestId('searchRestaurants')

    expect(searchInput).toBeInTheDocument()

    fireEvent.change(searchInput, { target: { value: 'tiffin' } })

    const restaurantCard = screen.getAllByTestId('RestListCard')
    expect(restaurantCard.length).toBe(2)
})