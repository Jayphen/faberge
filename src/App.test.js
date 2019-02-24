import App from "./App";
import React from "react";
import { render } from "react-testing-library";
import MemoryRouter from "react-router-dom/MemoryRouter";

describe("<App />", () => {
  test("renders without exploding", () => {
    const { getByText } = setup();

    getByText(/Razzle TS/i);
  });
});

function setup() {
  const utils = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  return utils;
}
