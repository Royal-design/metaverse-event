import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { CartItem, removeFromCart, updateCart } from "@/redux/slice/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { X } from "lucide-react";
import React from "react";
import { formatPrice } from "@/utilities/formatPrice";
interface ItemType {
  item: CartItem;
}
export const CartListMobile = ({ item }: ItemType) => {
  const [updateQuantity, setupdateQuantity] = useState<number>(item.qty);
  const dispatch = useDispatch();

  const handleIncrement = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    const newQuantity = updateQuantity + 1;
    setupdateQuantity(newQuantity);
    dispatch(updateCart({ id, qty: newQuantity }));
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleDecrement = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    if (updateQuantity > 1) {
      const newQuantity = updateQuantity - 1;
      setupdateQuantity(newQuantity);
      dispatch(updateCart({ id, qty: newQuantity }));
    }
  };
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  return (
    <Card className="w-full p-0  bg-gradient-to-br from-black to-[#270427] border-border-light">
      <CardContent className=" h-full flex w-full  gap-2 p-2">
        <figure className="h-[4rem] w-[4rem]  rounded-sm bg-background-heavy">
          <img src={item.image} alt={item.name} className="w-full h-full " />
        </figure>
        <div className="flex-1 text-white">
          <div className="flex justify-between text-white items-center">
            <p className="font-bold">{item.name}</p>
            <X
              onClick={() => handleRemoveFromCart(item.id)}
              className="w-[1.3rem] bg-button-background-heavy hover:bg-button-background-light rounded-full p-1"
            />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm">{item.price}</p>
            <div className="flex items-center gap-2">
              <Button
                onClick={(e) => handleDecrement(e, item.id)}
                className="h-6 cursor-pointer bg-button-background-heavy hover:bg-button-background-light rounded-full p-2 flex items-center justify-center"
              >
                -
              </Button>
              <p>{updateQuantity}</p>
              <Button
                onClick={(e) => handleIncrement(e, item.id)}
                className="h-6 cursor-pointer bg-button-background-heavy hover:bg-button-background-light rounded-full p-2 flex items-center justify-center"
              >
                +
              </Button>
            </div>
            <p>{formatPrice(item.totalPrice)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
