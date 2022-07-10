import { render, screen } from "@testing-library/react";
import { Wrapper } from "./Wrapper";

describe("<Wrapper />", () => {
  it("should render Wrapper", () => {
    const { container } = render(
      <Wrapper height="h-400">
        <div>Children</div>
      </Wrapper>
    );

    expect(screen.getByText("Children")).toBeInTheDocument();
    expect(container.querySelector("div")).toHaveClass("h-400");
    expect(container.querySelector("div")).toHaveClass("bg-mikadoYellow");
  });
  it("should render with isPost property", () => {
    const { container } = render(
      <Wrapper height="h-400" isPost>
        <div>Children</div>
      </Wrapper>
    );
    expect(screen.getByText("Children")).toBeInTheDocument();
    expect(container.querySelector("div")).toHaveClass("h-400");
    expect(container.querySelector("div")).toHaveClass("bg-mikadoYellow");
    expect(container.querySelector("div")).toHaveClass("sticky");
    expect(container.querySelector("div")).toHaveClass("z-2");
    expect(container.querySelector("div")).toHaveClass("top-0");
  });
});
