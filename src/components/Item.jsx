export default function Item() {
  return (
    <li className="flex justify-between items-center bg-white px-3 py-4 border border-blue-500 rounded-md">
      <span>Todo List</span>
      <div className="flex gap-5">
        <button className=" bg-blue-500 px-3 py-1.5 text-white rounded-md">
          Edit
        </button>
        <button className=" bg-red-400 px-3 py-1.5 text-white rounded-md">
          Delete
        </button>
      </div>
    </li>
  );
}
