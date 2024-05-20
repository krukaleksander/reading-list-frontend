const makeHealthCheckRequest = async () => {
    const response = await fetch('https://reading-list-api-6dr3fonhaq-uc.a.run.app/health-check');
    return response.text();
    };

export async function load() {
   const healthCheckResponse = await makeHealthCheckRequest();
   return {healthCheckResponse};
}