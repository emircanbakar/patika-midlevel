import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./index";

describe("todo tests", () => {
  let button, input;
  beforeEach(() => {
    render(<Todo />);
    button = screen.getByText("Add");
    input = screen.getByLabelText("Todo");
  });
  test("3 nesne render edilmeli", () => {
    const items = screen.getAllByText(/Item/i);
    expect(items.length).toEqual(3);
  });
  test("buton ve input olmalı", () => {
    expect(button).toBeInTheDocument;
    expect(input).toBeInTheDocument;
  });
  test("Inputa string girilip butona basılınca listeye eklenmeli", () => {
    const name = "emir";
    userEvent.type(input, name);
    fireEvent.click(button);
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
