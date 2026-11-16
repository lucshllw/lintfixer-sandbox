import assert from "node:assert/strict";
import { test } from "node:test";
import { orderService } from "../src/services/order-service.ts";

test("orderService delegates database query cleanly", async () => {
  const rows = await orderService.listActive();
  assert.equal(rows.length, 1);
});