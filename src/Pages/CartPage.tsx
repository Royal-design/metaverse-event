import { CartListMobile } from "@/components/CartListMobile";
import { Checkout } from "@/components/Checkout";
import { TableItem } from "@/components/TableItem";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { db } from "@/config/firebase";
import { clearCart, order } from "@/redux/slice/cartSlice";
import { RootState } from "@/redux/store";
import { formatPrice } from "@/utilities/formatPrice";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  const dispatch = useDispatch();
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  const handleToken = async () => {
    const docRef = collection(db, "orders");
    await addDoc(docRef, {
      orders: cartItems,
      createdAt: serverTimestamp()
    });
    dispatch(order());
    navigate("/");
  };
  return (
    <main className="">
      <div className="mb-12">
        {totalQuantity === 0 ? (
          <p className="p-8">Cart is empty</p>
        ) : (
          <section className="h-auto">
            <div className="flex flex-col gap-4 my-4 bg-background-card max-sm:p-4 px-8 py-4">
              <h2 className="font-bold">Shopping Cart</h2>
            </div>

            <div className="flex max-sm:flex-col gap-[2rem] max-sm:gap-[4rem] ">
              <div className="hidden max-sm:flex max-sm:flex-col max-sm:gap-2 px-4">
                {cartItems.map((item) => (
                  <CartListMobile item={item} key={item.id} />
                ))}
                <Button
                  className="mt-4 bg-button-background-heavy hover:bg-button-background-light"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </Button>
              </div>
              <div className="w-full  max-sm:hidden px-8">
                <Table>
                  <TableHeader>
                    <TableRow className=" border-b border-border-light hover:bg-[#1e0b1ea9]">
                      <TableHead className="w-full text-white">
                        Products
                      </TableHead>
                      <TableHead className="w-full text-white">Price</TableHead>
                      <TableHead className="w-full text-white">
                        Quantity
                      </TableHead>
                      <TableHead className="w-full text-white">
                        Subtotal
                      </TableHead>
                      <TableHead className="text-right text-white">
                        Action
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableItem item={item} key={item.id} />
                    ))}
                  </TableBody>
                </Table>
                <Button
                  className="mt-4  bg-button-background-heavy hover:bg-button-background-light"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </Button>
              </div>

              <div className="flex w-[20rem] max-sm:w-full max-sm:px-4 px-8 flex-col gap-5">
                <article className="flex justify-between">
                  <p>Subtotal</p>
                  <p>{formatPrice(totalPrice)}</p>
                </article>
                <article className="flex justify-between">
                  <p>Shipping</p>
                  <p>Free</p>
                </article>
                <article className="flex justify-between">
                  <p>Total</p>
                  <p>{formatPrice(totalPrice)}</p>
                </article>
                <Checkout totalPrice={totalPrice} handleToken={handleToken} />
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};
