import RegisterHook from "../hook/register-hook";

export default function RegisterPage() {
  const {
    handleUsername,
    usernameNull,
    handlePassword,
    passwordNull,
    handleConfirmPassword,
    handleSubmit,
    comparePassword,
  } = RegisterHook();

  return (
    <section className="flex flex-col gap-4 p-4 shadow-lg bg-white rounded-xl">
      <div>
        <label htmlFor="username" className="block mb-1 font-semibold">
          Username
        </label>
        <input
          id="username"
          type="text"
          className={`w-full border outline-none px-3 py-1.5 rounded-md ${
            usernameNull ? "border-pink-700" : ""
          }`}
          onChange={handleUsername}
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-1 font-semibold">
          Password
        </label>
        <input
          id="password"
          type="password"
          className={`w-full border outline-none px-3 py-1.5 rounded-md ${
            passwordNull ? "border-pink-700" : ""
          }`}
          onChange={handlePassword}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="block mb-1 font-semibold">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          className={`w-full border outline-none px-3 py-1.5 rounded-md ${
            comparePassword ? "" : " border-pink-700"
          }`}
          onChange={handleConfirmPassword}
        />
        {comparePassword ? (
          ""
        ) : (
          <span className="text-pink-700">
            {" "}
            Password does not match, please check again
          </span>
        )}
      </div>
      <button
        className="flex items-center justify-center   bg-blue-500 px-3 py-1.5  text-white rounded-md"
        onClick={handleSubmit}
      >
        Sign Up
      </button>
    </section>
  );
}
