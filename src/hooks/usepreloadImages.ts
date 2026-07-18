import { useEffect, useState } from "react";
import { Product } from "../data/fakeProducts";

function usePreloadImages(products: Array<Product>) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (products.length > 0) {
      const imagePromises = products.map((product) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = product.image;
          img.onload = () => resolve();
        });
      });

      Promise.all(imagePromises).then(() => {
        setIsLoading(false);
      });
    }
  }, [products]);

  return isLoading;
}

export default usePreloadImages;
