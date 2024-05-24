<script>
  import "../app.css";

  export let data;
  const { healthCheckResponse } = data;
</script>

<div class="flex justify-end">
    <p class="p-4 m-3 bg-white rounded shadow-md">API Status: <span class="text-green-600 font-bold">{healthCheckResponse}</span></p>
</div>
<slot />
