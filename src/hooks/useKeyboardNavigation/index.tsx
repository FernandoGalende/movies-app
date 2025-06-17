import { useEffect, useRef, useState } from "react";

export function useKeyboardNavigation<T extends HTMLElement>(items: unknown[]) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const itemRefs = useRef<(T | null)[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (itemRefs.current.length === 0) return;

      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          setSelectedIndex((prev) => {
            const nextIndex = prev < items.length - 1 ? prev + 1 : prev;
            itemRefs.current[nextIndex]?.focus();
            return nextIndex;
          });
          break;
        case "ArrowLeft":
          event.preventDefault();
          setSelectedIndex((prev) => {
            const nextIndex = prev > 0 ? prev - 1 : prev;
            itemRefs.current[nextIndex]?.focus();
            return nextIndex;
          });
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [items, selectedIndex]);

  return {
    selectedIndex,
    setSelectedIndex,
    itemRefs,
  };
}
