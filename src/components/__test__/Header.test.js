import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { initialState, rootReducer } from "../../reducers/restaurantReducer";
import Header from "../header/Header";

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

it("renders App Heading", () => {
  const { getByTestId } = renderWithRedux(<Header />);
  expect(getByTestId("mainHeading")).toHaveTextContent("Restaurants in your City"
  );
});
