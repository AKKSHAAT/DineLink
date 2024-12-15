import useOrderStore from "@/orderStore";

export const Cart = () => {
  const { order } = useOrderStore();
  if (order.itemList.length === 0) return <p>cart is empty</p>;
  return (
    <div>
      {order?.itemList?.map((item, i) => {

        return (
          <div key={i} className="flex justify-between items-center mb-2">
            <div>
              <p className="font-semibold capitalize">{item.menuItemName}</p>
              <p>
                Qty: <strong>{item.quantity}</strong>
              </p>
            </div>
            <p>₹{item.price * item.quantity}</p>
          </div>
        );
      })}
      <p className="font-semibold">Total: {order.total}</p>
    </div>
  );
};
