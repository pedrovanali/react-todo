import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App test suite", () => {
  it("should check if the navigation links are there", () => {
    render(<App />);
    const todoPageLink = screen.getByText(/Todo page/i);
    const chartsPageLink = screen.getByText(/Charts Page/i);
    expect(todoPageLink).toBeInTheDocument();
    expect(chartsPageLink).toBeInTheDocument();
  });
  it("should check if the Todo Page is default", () => {
    render(<App />);
    const addTodoComponent = screen.getByText(/new todo item/i);
    expect(addTodoComponent).toBeInTheDocument();
  });
  it("should navigate to Charts page", () => {
    render(<App />);
    const chartsPageLink = screen.getByText(/Charts Page/i);
    fireEvent.click(chartsPageLink);
    const chartsPageComponent = screen.getByText(/Chart Page/i);
    expect(chartsPageLink).toBeInTheDocument();
    expect(chartsPageComponent).toBeInTheDocument();
  });
});


