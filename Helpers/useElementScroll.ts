import { useCallback, useEffect, useRef, RefObject } from "react";

export default function useElementScroll({
  reference,
  callback = (f?: any) => f,
  hasMore = true,
  threshold = 100,
}: {
  callback: () => any;
  reference?: RefObject<HTMLDivElement | undefined>;
  hasMore?: boolean;
  threshold?: number;
}) {
  const createdRef = useRef<HTMLDivElement>();
  const handleScroll = useCallback(() => {
    const ref = reference?.current || createdRef.current;
    if (
      ref &&
      ref.scrollHeight <= ref.offsetHeight + ref.scrollTop + threshold &&
      hasMore
    ) {
      callback();
    }
  }, [callback, hasMore, reference, threshold]);

  useEffect(() => {
    const ref = reference?.current || createdRef.current;
    ref?.addEventListener("scroll", handleScroll);
    return () => {
      ref?.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, hasMore, reference, threshold]);

  return createdRef;
}
