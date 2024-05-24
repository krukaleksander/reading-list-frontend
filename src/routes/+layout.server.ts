import { StandardMessagesEnum } from "./interfaces/standard-messages.enum.ts";

const makeHealthCheckRequest = async () => {
  try {
    const response = await fetch(
      "https://reading-list-api-6dr3fonhaq-uc.a.run.app/health-check",
    );
    return response.text();
  } catch (error) {
    if (error) {
      return StandardMessagesEnum.NotAvailable;
    }
  }
};

export async function load() {
  const healthCheckResponse = await makeHealthCheckRequest();
  return { healthCheckResponse };
}
