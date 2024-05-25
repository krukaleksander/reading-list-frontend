<script>
  let username = "";
  let password = "";
  let getAllResponse;

  const login = async () => {
    const token = btoa(`${username}:${password}`);
    const response = await fetch(`${import.meta.env.VITE_API_URL}/all`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${token}`,
      },
    });
   getAllResponse = await response.json();
  };
</script>

<div class="flex items-center justify-center min-h-screen">
  <div class="p-6 m-3 bg-white rounded shadow-md w-80">
    <h2 class="mb-4 text-xl font-bold text-center">Login</h2>
    <div class="mb-4">
      <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
        Username
      </label>
      <input
        bind:value={username}
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Username"
      />
    </div>
    <div class="mb-6">
      <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
        Password
      </label>
      <input
        bind:value={password}
        class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="******************"
      />
    </div>
    <div class="flex items-center justify-between">
      <button
        on:click={login}
        class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        type="button"
      >
        Log in
      </button>
    </div>
  </div>
</div>
