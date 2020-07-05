import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { rootReducer } from "../../reducers/restaurantReducer";
import Restaurants from "../restaurants/Restaurants";

const initialState = {
    city: 'Toronto',
    item: []
}

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

 it("renders button correctly", () => {
   const { getByTestId } = renderWithRedux(<Restaurants />);
   expect(getByTestId("findButton")).toHaveTextContent("Find Restaurants");
 });

 it("renders address filter input correctly", () => {
   const { getByTestId } = renderWithRedux(<Restaurants />);
   expect(getByTestId("addressFilterInput")).toHaveTextContent("");
 });
