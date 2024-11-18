import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../src/components/Counter";

test("renders with initial value of 0 ", () => {
render(<Counter />);
expect(screen.getByRole("heading")).toHaveTextContent("0");
});

test("renders with a new value of 2 ", async () => {
render(<Counter />);
await userEvent.click(screen.getByText("Increment the counter"));
await userEvent.click(screen.getByText("Increment the counter"));
expect(screen.getByRole("heading")).toHaveTextContent("2");
});

test("renders with a new value of 4 and then decreases by 2", async () => {
    render(<Counter />);
    await userEvent.click(screen.getByText("Increment the counter"));
    await userEvent.click(screen.getByText("Increment the counter"));
    await userEvent.click(screen.getByText("Increment the counter"));
    await userEvent.click(screen.getByText("Increment the counter"));
    expect(screen.getByRole("heading")).toHaveTextContent("4");
    await userEvent.click(screen.getByText("Decrement the counter"));
    await userEvent.click(screen.getByText("Decrement the counter"));
    expect(screen.getByRole("heading")).toHaveTextContent("2");
    });