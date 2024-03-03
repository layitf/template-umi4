
import { useRef, useEffect } from 'react';
 
export function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  
  // 将当前值存入ref.current
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref.current as T;
}