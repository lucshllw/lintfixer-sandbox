import { db } from "./db.ts";

export const orderService = {
  async listActive() {
    return db.query("SELECT id, total FROM orders WHERE active = 1");
  },
};
