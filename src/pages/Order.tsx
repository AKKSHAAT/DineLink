import Loading from "@/components/Loading";
import useFetch from "@/hooks/useFetch";
import { OrderCard } from "./OrderCard";

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

export const Order = () => {
  const { data, loading, error } = useFetch<Data[]>("order/restaurant/1");

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-full mb-5 p-4">
      <p className="text-lg font-bold mb-2">Orders</p>
      <div className="max-h-[450px] overflow-y-auto border rounded-lg shadow-md p-2 flex flex-wrap gap-4">
        {data?.map((order) => (
          <OrderCard key={order.id} data={[order]} />
        ))}
      </div>
    </div>
  );
};
