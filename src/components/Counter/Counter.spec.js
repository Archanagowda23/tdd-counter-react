import React from "react";
import Counter from './Counter';
import { fireEvent, render } from "@testing-library/react";

describe("Basic rendering of counter", () => {
   it("Should render Counter value", () => {
      const counter = render(<Counter />);

      const counterValue = counter.findByText(Text);

      expect(counterValue).toBeDefined();
   });
});

it("Should equal to 0 ", () => {
   const component = render(<Counter />);

   expect(component.getByTestId("Counter")).toHaveTextContent(0);
});

it("Should be able to increment", () => {
   const { getByTestId } = render(<Counter />);

   expect(getByTestId("up-button")).not.toHaveAttribute("disabled");
});

it("Should be able to decrement", () => {
   const { getByTestId } = render(<Counter />);

   expect(getByTestId("down-button")).not.toHaveAttribute("disabled");
});

describe("Testing counter functionality", () => {
   it("increments counter when Increment button is pressed", () => {
      const { getByTestId } = render(<Counter />);

      fireEvent.click(getByTestId("up-button"));

      expect(getByTestId("Counter")).toHaveTextContent("1");

   });

   it("decrements counter when decrement button is pressed", () => {

      const { getByTestId } = render(<Counter />);

      fireEvent.click(getByTestId("down-button"));

      expect(getByTestId("Counter")).toHaveTextContent("-1");

   });

});



