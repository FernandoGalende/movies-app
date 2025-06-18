import { renderHook, act } from "@testing-library/react";
import { useKeyboardNavigation } from "../index";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("useKeyboardNavigation", () => {
  const mockItems = ["item1", "item2", "item3"];
  const mockOnSelect = vi.fn();

  beforeEach(() => {
    mockOnSelect.mockClear();
  });

  it("should handle ArrowRight and ArrowLeft keys", () => {
    const { result } = renderHook(() =>
      useKeyboardNavigation<HTMLDivElement, string>(mockItems)
    );

    // Mock refs
    const mockRefs = mockItems.map(() => {
      const element = document.createElement("div");
      element.focus = vi.fn();
      return element;
    });
    result.current.itemRefs.current = mockRefs;

    // Test ArrowRight
    act(() => {
      const rightEvent = new KeyboardEvent("keydown", { key: "ArrowRight" });
      document.dispatchEvent(rightEvent);
    });

    expect(result.current.selectedIndex).toBe(0);
    expect(mockRefs[0].focus).toHaveBeenCalled();

    // Test ArrowLeft
    act(() => {
      const leftEvent = new KeyboardEvent("keydown", { key: "ArrowLeft" });
      document.dispatchEvent(leftEvent);
    });

    expect(result.current.selectedIndex).toBe(0);
    expect(mockRefs[0].focus).toHaveBeenCalled();
  });
});
