export default function RegisterPage() {
  return (
    <section className="flex flex-col gap-4 p-4 shadow-lg bg-white rounded-xl">
      <div>
        <label htmlFor="" className="block mb-1 font-semibold">
          Username
        </label>
        <input
          type="text"
          className="w-full border outline-none px-3 py-1.5 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="" className="block mb-1 font-semibold">
          Password
        </label>
        <input
          type="password"
          className="w-full border outline-none px-3 py-1.5 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="" className="block mb-1 font-semibold">
          Confirm Password
        </label>
        <input
          type="password"
          className="w-full border outline-none px-3 py-1.5 rounded-md"
        />
      </div>
      <button className="flex items-center justify-center   bg-blue-500 px-3 py-1.5  text-white rounded-md">
        Sign Up
      </button>
    </section>
  );
}
