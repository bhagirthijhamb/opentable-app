import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { initialState, rootReducer } from "../../reducers/restaurantReducer";
import CityForm from "../cityForm/CityForm";

const renderWithRedux = (
        component,
        { initialState, store = createStore(rootReducer, initialState) } = {}
    ) => {
        return {
            ...render(<Provider store={store}>{component}</Provider>),
            store,
        };
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<input />, div);
});

test("renders paragraph correctly", () => {
  const { getByTestId } = renderWithRedux(<CityForm />);
  expect(getByTestId("yourCity")).toHaveTextContent("");
});