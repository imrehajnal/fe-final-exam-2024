import assert from "assert";
import test from "node:test";
import { processTransactions } from "./index.js";

test("should calculate the correct balance with mixed transactions", () => {
  const transactions = [
    { type: "deposit", amount: 100 },
    { type: "withdrawal", amount: 50 },
    { type: "deposit", amount: 200 },
    { type: "withdrawal", amount: 300 },
    { type: "withdrawal", amount: 150 },
  ];
  assert.strictEqual(processTransactions(transactions), 100);
});

test("should handle all deposits correctly", () => {
  const transactions = [
    { type: "deposit", amount: 50 },
    { type: "deposit", amount: 150 },
    { type: "deposit", amount: 200 },
  ];
  assert.strictEqual(processTransactions(transactions), 400);
});

test("should handle all withdrawals correctly without going below zero", () => {
  const transactions = [
    { type: "withdrawal", amount: 50 },
    { type: "withdrawal", amount: 150 },
    { type: "withdrawal", amount: 200 },
  ];
  assert.strictEqual(processTransactions(transactions), 0);
});

test("should handle an empty transactions list", () => {
  const transactions = [];
  assert.strictEqual(processTransactions(transactions), 0);
});

test("should handle transactions with zero amounts correctly", () => {
  const transactions = [
    { type: "deposit", amount: 0 },
    { type: "withdrawal", amount: 0 },
  ];
  assert.strictEqual(processTransactions(transactions), 0);
});
