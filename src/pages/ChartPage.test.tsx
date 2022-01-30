import { render, screen } from "@testing-library/react";
import ChartPage from "./ChartPage";

describe("Chart page test suite", () => {
  it("should render chart page asw expected", () => {
    render(<ChartPage />);
    const chartPage = screen.getByText("Chart page");
    expect(chartPage).toBeInTheDocument();
  });
});
