import { useEffect, useState } from "react";

export const useOrigin = () => {
  const [isMounted, setMount] = useState(false);

  const origin =
    typeof window !== undefined && window.location.origin
      ? window.location.origin
      : "";

  useEffect(() => {
    setMount(true);
  }, []);

  if (!isMounted) return "";
  return origin;
};
