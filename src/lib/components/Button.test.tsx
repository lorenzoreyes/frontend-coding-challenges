import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);

    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("applies active styling when active", () => {
    render(<Button active>Active</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("bg-yellow-600/60");
  });

  it("does not apply active styling when inactive", () => {
    render(<Button>Inactive</Button>);
    const button = screen.getByRole("button");
    expect(button.className).not.toContain("bg-yellow-600/60");
  });

  it("merges custom className", () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("custom-class");
  });
});
