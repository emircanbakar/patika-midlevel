import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

describe("Counter Test", () => {
  let count, increaseBtn, decreaseBtn;
  beforeEach(() => {
    console.log("her testten önce çalışacak");
    render(<Counter />);
    count = screen.getByText("0");
    increaseBtn = screen.getByText("Increase");
    decreaseBtn = screen.getByText("Decrease");
  });
  beforeAll(() => {
    console.log("bir kere çalışacak");
  });
  afterEach(() => {
    console.log("her testten sonra çalışacak");
  });
  afterAll(() => {
    console.log("en sonda sonda bir defa çalışacak");
  });
  test("increase btn", () => {
    // counter renderledik burada Increase yazan texti tanımladık sonra eventi gerçekleştiriyoruz.
    act(() => {
      userEvent.click(increaseBtn);
    });
    expect(count).toHaveTextContent("1");
  });

  test("increase btn", () => {
    act(() => {
      userEvent.click(decreaseBtn);
    });
    expect(count).toHaveTextContent("-1");
  });
});
