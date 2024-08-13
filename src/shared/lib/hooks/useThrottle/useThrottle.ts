import { useCallback, useRef } from 'react';

export function useThrottle(
  // eslint-disable-next-line
  callback: (...args: any[]) => void,
  delay: number,
) {
  const throttleRef = useRef(false);
  return useCallback(
    // eslint-disable-next-line
    (...args: any[]) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;
      }

      setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    },
    [callback, delay],
  );
}
