import { useEffect, useState } from "react";

function useDebouncedState<T>(
  v?: T,
  delay?: number
): [T | undefined, (v: T) => void] {
  const [value, setValue] = useState<T | undefined>(v);
  const [debouncedValue, setDebouncedValue] = useState<T | undefined>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return [debouncedValue, setValue];
}

export default useDebouncedState;
