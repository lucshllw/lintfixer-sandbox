import assert from "node:assert/strict";
import { orderService } from "../src/services/order-service.ts";

const rows = await orderService.listActive();
assert.equal(rows.length, 1);
