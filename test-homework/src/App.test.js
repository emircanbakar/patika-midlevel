/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import emojiList from "./emojiList.json"


describe('test', () =>{
  let header, emoji, input, filterList;
  beforeEach(() =>{
    render(<App />);
  })
  test('header test', () => {
    header = screen.getByText(/Emoji Search/i)
    expect(header).toBeInTheDocument()
  })
  test("emoji list test" , () => {
    emoji = emojiList.slice(0,2)
    emoji.map((item) => (expect(screen.getByText(item.title)).toBeInTheDocument()))
  })
  test("filter test", ()=>{
    input = screen.getByRole("textbox")
    const filter = "smile"
    filterList = emojiList.filter(it => it.title.toLowerCase().match(filter))
    fireEvent.change(input,  {target:{value:filter}})
    expect(screen.getAllByText(/smile/i)).toHaveLength(4)
  })
  test("copying test" , () =>{
    const click = screen.getByText("Smile")
    expect(click.parentElement.getAttribute("data-clipboard-text").length).toBeGreaterThan(0);
    expect(click.parentElement.getAttribute("data-clipboard-text")).toMatch("😄")
  })
})