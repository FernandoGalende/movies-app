import { useEffect, useRef, useState } from "react";

export function useKeyboardNavigation<T extends HTMLElement, U>(items: U[]) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const itemRefs = useRef<(T | null)[]>([]);

  const getCurrentFocusedIndex = () => {
    const activeElement = document.activeElement;
    return itemRefs.current.findIndex((ref) => ref === activeElement);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (itemRefs.current.length === 0) return;

      const currentFocusedIndex = getCurrentFocusedIndex();
      const isFocusInList = currentFocusedIndex !== -1;

      if (!isFocusInList) return;

      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          setSelectedIndex(() => {
            const nextIndex =
              currentFocusedIndex < items.length - 1
                ? currentFocusedIndex + 1
                : 0;
            itemRefs.current[nextIndex]?.focus();
            return nextIndex;
          });
          break;
        case "ArrowLeft":
          event.preventDefault();
          setSelectedIndex(() => {
            const nextIndex =
              currentFocusedIndex > 0
                ? currentFocusedIndex - 1
                : items.length - 1;
            itemRefs.current[nextIndex]?.focus();
            return nextIndex;
          });
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [items]);

  return {
    selectedIndex,
    setSelectedIndex,
    itemRefs,
  };
}
