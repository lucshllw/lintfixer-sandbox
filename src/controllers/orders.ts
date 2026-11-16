import { db } from "../services/db.ts";
import { orderService } from "../services/order-service.ts";

export async function listOrders() {
  const rows = await db.query("SELECT id, total FROM orders WHERE active = 1");
  return { source: orderService ? "controller" : "none", rows };
}