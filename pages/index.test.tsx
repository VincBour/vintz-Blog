import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

jest.mock("@/components/recentlyPublished/RecentlyPublished", () => ({
  RecentlyPublished: () => <div>RecentlyPublished</div>,
}));
jest.mock("@/components/topCategories/TopCategories", () => ({
  TopCategories: () => <div>TopCategories</div>,
}));
jest.mock("@/components/layout/Layout", () => ({
  Layout: ({ children }: any) => <div>Layout{children}</div>,
}));
describe("Home", () => {
  it("renders Layout", () => {
    render(<Home allPosts={[]} />);

    expect(screen.getByText("Layout")).toBeInTheDocument();
  });
  it("renders RecentlyPublished", () => {
    render(<Home allPosts={[]} />);

    expect(screen.getByText("RecentlyPublished")).toBeInTheDocument();
  });
  it("renders TopCategories", () => {
    render(<Home allPosts={[]} />);

    expect(screen.getByText("TopCategories")).toBeInTheDocument();
  });
});
