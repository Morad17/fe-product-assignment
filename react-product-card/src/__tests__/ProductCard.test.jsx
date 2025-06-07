import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ProductCard from "../components/ProductCard";

test('shows "Added" button after clicking Add to Cart three times', () => {
  const { getByRole, asFragment, queryByText } = render(<ProductCard />);
  
  // Find Add To Cart Button
  let button = getByRole("button", { name: /add to cart/i });

  // Simulates Clicking three times
  fireEvent.click(button);
  button = getByRole("button");
  fireEvent.click(button);
  button = getByRole("button");
  fireEvent.click(button);

  // Check to see if button text has Added
  expect(queryByText(/added/i)).toBeInTheDocument();

  // Snapshot result
  expect(asFragment()).toMatchSnapshot();
});