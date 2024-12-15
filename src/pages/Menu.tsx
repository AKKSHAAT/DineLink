import useFetch from "@/hooks/useFetch";
import Loading from "@/components/Loading";
import { ItemCard } from "@/components/ItemCard";


interface MenuItem {
  id: number;
  name: string;
  description?: string;
  price: number;
  image?: string;
  categoryId?: number; 
}
interface Data {
  msg:string,
  menuItems: MenuItem[]
}

export const Menu = () => {
  const { data, loading, error } = useFetch<Data>("/menu");
  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul className="flex gap-6">
      {data?.menuItems?.map((item) => (
        <li key={item.id} >
         <ItemCard item={item}/>
        </li>
      ))}
    </ul>
  );
};
