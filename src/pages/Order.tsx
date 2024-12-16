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
    <div className="w-72 mb-5 p-4">
      <p className="text-lg font-bold mb-2">Orders</p>
      <OrderCard data={data} />
    </div>
  );
};
