import React from "react";
import { render, screen } from "@testing-library/react";

import InvoicePage from "../InvoicePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders invoice page", async () => {
  const store = init({ models });
  render(
    <Provider store={store}>
      <MemoryRouter>
        <InvoicePage />
      </MemoryRouter>
    </Provider>,
  );
  expect(screen.getByRole("invoice-datatable")).toBeInTheDocument();
  expect(screen.getByRole("invoice-add-button")).toBeInTheDocument();
});
