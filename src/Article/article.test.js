import { Article } from "./article";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Article component", () => {
  it("should show title correctly", () => {
    render(
      <Article
        title="abc"
        content="description"
        author="John"
        isSponsored={false}
      />
    );
    expect(screen.getByText("abc")).toBeInTheDocument();
  });

  test("should render info about sponsored article", () => {
    render(
      <Article
        title="abc"
        content="description"
        author="John"
        isSponsored={true}
      />
    );
    expect(screen.getByText("Sponsored article")).toBeInTheDocument();
  });
  test("should not render info about sponsored article", () => {
    render(
      <Article
        title="abc"
        content="description"
        author="John"
        isSponsored={false}
      />
    );
    expect(screen.queryByText("Sponsored article")).not.toBeInTheDocument();
  });
  test("should  render content as parsed html", () => {
    const html = '<a href="google.pl"> google link <a>';
    render(
      <Article title="abc" content={html} author="John" isSponsored={false} />
    );
    const link = screen.getByText("google link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "google.pl");
  });
  test("Should show author after button click", () => {
    render(
      <Article
        title="abc"
        content="description"
        author="John"
        isSponsored={true}
      />
    );
    expect(screen.queryByText("Author: John")).not.toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Show Author");

    fireEvent.click(button);

    expect(screen.getByText("Author: John")).toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });
});
