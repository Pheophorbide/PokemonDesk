import { useState, useEffect } from 'react';

const useDebounce = (value: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const hook = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(hook);
  }, [value]);

  return debounceValue;
};

export default useDebounce;
