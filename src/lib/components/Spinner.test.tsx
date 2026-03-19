import { render, screen } from "@testing-library/react";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("renders with visible opacity by default", () => {
    render(<Spinner />);
    const spinner = screen.getByText("⍥");
    expect(spinner).toBeInTheDocument();
    expect(spinner.className).toContain("opacity-100");
  });

  it("renders with hidden opacity when show is false", () => {
    render(<Spinner show={false} />);
    const spinner = screen.getByText("⍥");
    expect(spinner.className).toContain("opacity-0");
  });

  it("applies custom delay", () => {
    render(<Spinner wait="delay-500" />);
    const spinner = screen.getByText("⍥");
    expect(spinner.className).toContain("delay-500");
  });
});
