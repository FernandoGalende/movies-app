import { renderHook, act } from "@testing-library/react";
import { useKeyboardNavigation } from "../index";
import { describe, it, expect, vi } from "vitest";

describe("useKeyboardNavigation", () => {
  it("should navigate between items when focus is in the list", () => {
    const mockItems = ["item1", "item2", "item3"];

    const { result } = renderHook(() =>
      useKeyboardNavigation<HTMLAnchorElement, string>(mockItems)
    );

    const mockRefs = mockItems.map(() => {
      const element = document.createElement("a");
      const mockFocus = vi.fn();
      Object.defineProperty(element, "focus", {
        value: mockFocus,
        writable: true,
      });
      return element;
    });
    result.current.itemRefs.current = mockRefs;

    act(() => {
      Object.defineProperty(document, "activeElement", {
        value: mockRefs[0],
        writable: true,
      });
    });

    act(() => {
      const rightEvent = new KeyboardEvent("keydown", { key: "ArrowRight" });
      document.dispatchEvent(rightEvent);
    });

    expect(result.current.selectedIndex).toBe(1);
    expect(mockRefs[1].focus).toHaveBeenCalled();
  });
});
