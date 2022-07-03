import React from "react";
import { fireEvent, getByText, waitFor, render } from "@testing-library/react";
import AsynchCounter from "./asynchCounter";

describe("Testing asynchronous counter functionality", () => {
  it("Increments the counter value 0.5 seconds after Increments Button is clicked", async () => {
    const { getByTestId, getByText } = render(<AsynchCounter />);

    fireEvent.click(getByTestId("up-button"));

    const counter = await waitFor(() => getByText("1"));

    expect(counter).toHaveTextContent("1");
  });
});