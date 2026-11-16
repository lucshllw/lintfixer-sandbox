import { orderService } from "../services/order-service.ts";

export async function getOrderMetrics() {
  const activeOrders = await orderService.listActive();
  return { activeCount: activeOrders.length };
}