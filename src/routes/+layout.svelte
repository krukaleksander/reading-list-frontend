<script>
    export let data;
    const { healthCheckResponse } = data;
</script>

<p>API Status: {healthCheckResponse}</p>
<slot />