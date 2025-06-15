import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { Paginator } from "..";

describe("Paginator", () => {
  test("renders correct page buttons for first page", () => {
    render(<Paginator current={1} total={10} onChange={() => {}} />);
    // Should render pages 1-5 (max 5 buttons)
    for (let i = 1; i <= 5; i++) {
      if (i === 1) {
        expect(
          screen.getByRole("button", { name: "Current page 1" })
        ).toBeInTheDocument();
      } else {
        expect(
          screen.getByRole("button", { name: `Go to page ${i}` })
        ).toBeInTheDocument();
      }
    }
    // Current page button should be disabled and have aria-current
    const currentBtn = screen.getByRole("button", { name: "Current page 1" });
    expect(currentBtn).toBeDisabled();
    expect(currentBtn).toHaveAttribute("aria-current", "page");
  });

  test("renders correct page buttons for a middle page", () => {
    render(<Paginator current={5} total={10} onChange={() => {}} />);
    // Should render pages 3-7
    for (let i = 3; i <= 7; i++) {
      if (i === 5) {
        expect(
          screen.getByRole("button", { name: "Current page 5" })
        ).toBeInTheDocument();
      } else {
        expect(
          screen.getByRole("button", { name: `Go to page ${i}` })
        ).toBeInTheDocument();
      }
    }
    const currentBtn = screen.getByRole("button", { name: "Current page 5" });
    expect(currentBtn).toBeDisabled();
    expect(currentBtn).toHaveAttribute("aria-current", "page");
  });

  test("renders correct page buttons for last page", () => {
    render(<Paginator current={10} total={10} onChange={() => {}} />);
    // Should render pages 6-10
    for (let i = 6; i <= 10; i++) {
      if (i === 10) {
        expect(
          screen.getByRole("button", { name: "Current page 10" })
        ).toBeInTheDocument();
      } else {
        expect(
          screen.getByRole("button", { name: `Go to page ${i}` })
        ).toBeInTheDocument();
      }
    }
    const currentBtn = screen.getByRole("button", { name: "Current page 10" });
    expect(currentBtn).toBeDisabled();
    expect(currentBtn).toHaveAttribute("aria-current", "page");
  });

  test("renders all page buttons if total is less than max", () => {
    render(<Paginator current={2} total={3} onChange={() => {}} />);
    for (let i = 1; i <= 3; i++) {
      if (i === 2) {
        expect(
          screen.getByRole("button", { name: "Current page 2" })
        ).toBeInTheDocument();
      } else {
        expect(
          screen.getByRole("button", { name: `Go to page ${i}` })
        ).toBeInTheDocument();
      }
    }
  });

  test("calls onChange when a page button is clicked", () => {
    const onChange = vi.fn();
    render(<Paginator current={2} total={5} onChange={onChange} />);
    fireEvent.click(screen.getByRole("button", { name: "Go to page 3" }));
    expect(onChange).toHaveBeenCalledWith(3);
  });
});
