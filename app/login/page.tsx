export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-100 dark:bg-zinc-900">
      <form className="login-form w-80 p-8 bg-white dark:bg-zinc-800 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center text-zinc-900 dark:text-zinc-100">
          Log In
        </h1>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-zinc-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-100"
            type="email"
            id="email"
            name="email"
            placeholder="john@email.com"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 border border-zinc-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-100"
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
