import { useState, useEffect } from "react";
import { Product } from "../../data/fakeProducts";
import { fetchProducts } from "../../services/api";
import { toCurrency } from "../../utils/toCurrency";
import LoadingScreen from "../LoadingScreen";
import usePreloadImages from "../../hooks/usepreloadImages";

function Storage() {
  const [products, setProducts] = useState<Array<Product>>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulasi pengambilan data
    fetchProducts().then((fakeProducts: Array<Product> | unknown): void => {
      setProducts(fakeProducts as Array<Product>);
    });
  }, []);

  const isLoading = usePreloadImages(products);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="w-[90rem] flexc overflow-auto h-[85vh] !items-start p-4">
        <div className="grid w-full grid-cols-2 gap-4 xl:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-white border border-teal-100 rounded-lg shadow shadow-teal-100 hover:shadow-md hover:border-teal-200 hover:scale-[1.02] transall"
            >
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full rounded-t-lg h-80"
              />
              <div className="px-3 mt-4">
                <h2 className="mb-2 text-xl font-semibold text-teal-900">
                  {product.name}
                </h2>
                <p className="text-teal-700">{product.description}</p>
                <p className="mt-5 text-lg font-bold text-teal-600 text-end">
                  {toCurrency(product.price, "id-ID")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Storage;
