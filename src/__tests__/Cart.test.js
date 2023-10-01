import { render, screen } from "@testing-library/react";
import Cart from "../components/Cart";
import "@testing-library/jest-dom"

describe("The Cart Component", () => {

    it("should render Cart page successfully", () => {
        render(<Cart />)

        const message = screen.getByText("You're on Cart page");

        expect(message).toBeInTheDocument();
    });

    it("should display button to click", () => {
        render(<Cart />)

        const btnText = screen.getByText('Click me')

        expect(btnText).toBeInTheDocument();
    })
})