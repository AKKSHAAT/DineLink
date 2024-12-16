import useOrderStore from "../stores/orderStore";

export const ItemCard = ({ item }) => {
  const { order, addItem, updateItemQuantity, resetOrder } = useOrderStore();

  return (
    <div className="w-44 h-56 bg-gray-100 rounded p-2 flex flex-col">
      <div className="h-32 overflow-hidden">
        <img
          className="w-full h-full object-cover rounded"
          src="https://loremflickr.com/cache/resized/defaultImage.small_200_200_nofilter.jpg"
          alt={item.name}
        />
      </div>
      <div className="mt-auto">
        <h3 className="truncate font-semibold">{item.name}</h3>
        <p className="truncate">{item.description}</p>
        <p className="truncate font-medium">₹{item.price}</p>
        <button
          className="bg-pink-500 text-white py-2 rounded w-full"
          onClick={() => addItem(item.id, item.name, item.price)}
        >
          Add
        </button>
      </div>
    </div>
  );
};
