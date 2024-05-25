<script>
  import "../app.css";
  import { StandardMessagesEnum } from "./interfaces/standard-messages.enum.ts";

  export let data;
  const { healthCheckResponse } = data;
</script>

<div class="flex justify-end">
  <p class="p-4 m-3 bg-white rounded shadow-md">
    API Status:
    <span
      class="{healthCheckResponse === StandardMessagesEnum.NotAvailable
        ? 'text-red-600'
        : 'text-green-600'} font-bold"
    >
      {healthCheckResponse}
    </span>
  </p>
</div>
<slot />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.300);
  }
</style>
