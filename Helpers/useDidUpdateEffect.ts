import { useRef, useEffect, EffectCallback, DependencyList } from "react";

/**
 * A hook that calls function on component update or inputs change phase
 */
export default function useDidUpdateEffect(
  fn: EffectCallback,
  dependencyList: DependencyList
) {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) fn();
    else didMountRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencyList);

  return true;
}
