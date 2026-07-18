import { useEffect, useState } from "react";

function useLoading(duration: number) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return [isLoading, setIsLoading];
}

export { useLoading };
