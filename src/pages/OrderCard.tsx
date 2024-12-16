interface MenuItems {
    id: number;
    name: string;
    price: number;
  }
  
  interface Data {
    id: number;
    total: number;
    status: string;
    tableNo: number;
    restaurantId: number;
    MenuItems: MenuItems[];
  }
  
  export const OrderCard = ({ data }: { data: Data[] }) => {
    return (
      <div>
        {data?.map((order) => (
          <div key={order.id} className="p-4 mb-4 bg-white shadow rounded">
            <p className="font-bold">Order No: {order.id}</p>
            <p className="text-xs text-gray-700">Table No: {order.tableNo}</p>
            {order.MenuItems.map((item) => (
              <div key={item.id} className="flex justify-between border-b-2 py-1">
                <p>{item.name}</p>
                <p>₹{item.price}</p>
              </div>
            ))}
            <p className="font-semibold mt-2">Total: ₹{order.total}</p>
          </div>
        ))}
      </div>
    );
  };
  