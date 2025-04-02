import { addToCart } from "@/redux/slice/cartSlice";
import { ProductType } from "@/redux/slice/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { formatPrice } from "@/utilities/formatPrice";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const Products = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();
  const addToCartClick = (product: ProductType) => {
    dispatch(addToCart({ ...product, qty: 1 }));
  };

  return (
    <section id="products" className="py-8 md:py-12  px-8 md:px-20 text-center">
      <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text">
        Explore Our Exclusive Products
      </h2>
      <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
        Upgrade your digital lifestyle with our cutting-edge metaverse products.
      </p>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {products.map((product) => (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.03, border: "1px solid yellow" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 1
            }}
            key={product.id}
            className="bg-gradient-to-r pr-[1px] overflow-hidden from-purple-500 rounded-xl via-pink-500 to-yellow-500"
          >
            <div className="bg-gradient-to-br from-black to-[#270427] rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition">
              <figure className="h-40">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-lg"
                />
              </figure>

              <h3 className="text-xl font-bold text-white mt-4">
                {product.name}
              </h3>
              <p className="text-gray-400 mt-2">{product.description}</p>
              <p className="text-lg font-semibold text-purple-400 mt-3">
                {formatPrice(product.price)}
              </p>
              <Button
                onClick={() => addToCartClick(product)}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:opacity-80 transition"
              >
                Buy Now
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
