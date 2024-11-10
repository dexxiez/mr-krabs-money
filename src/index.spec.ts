import { describe, test, expect } from "vitest";
import { Money } from ".";

describe("Money", () => {
  describe("Static Methods", () => {
    test("fromDollars creates correct amount", () => {
      const money = Money.fromDollars(10.99);
      expect(money.dollars).toBe(10.99);
      expect(money.asCents).toBe(BigInt(1099));
    });

    test("fromCents creates correct amount", () => {
      const money = Money.fromCents(499);
      expect(money.dollars).toBe(4.99);
      expect(money.asCents).toBe(BigInt(499));
    });

    test("zero creates zero amount", () => {
      const money = Money.zero();
      expect(money.dollars).toBe(0);
      expect(money.asCents).toBe(BigInt(0));
    });
  });

  describe("Operations", () => {
    test("add combines amounts correctly", () => {
      const a = Money.fromDollars(10);
      const b = Money.fromDollars(5);
      const result = a.add(b);
      expect(result.dollars).toBe(15);
    });

    test("subtract reduces amounts correctly", () => {
      const a = Money.fromDollars(10);
      const b = Money.fromDollars(5);
      const result = a.subtract(b);
      expect(result.dollars).toBe(5);
    });

    test("multiply scales amount correctly", () => {
      const money = Money.fromDollars(10);
      const result = money.multiply(2);
      expect(result.dollars).toBe(20);
    });

    test("clone creates independent copy", () => {
      const original = Money.fromDollars(10);
      const clone = original.clone();
      clone.add(Money.fromDollars(5));
      expect(original.dollars).toBe(10);
    });
  });

  describe("Formatting", () => {
    test("format returns correct currency string", () => {
      const money = Money.fromDollars(10.99);
      expect(money.format()).toBe("10.99");
    });
  });

  describe("Comparisons", () => {
    test("equals compares amounts correctly", () => {
      const a = Money.fromDollars(10);
      const b = Money.fromDollars(10);
      const c = Money.fromDollars(5);
      expect(a.equals(b)).toBe(true);
      expect(a.equals(c)).toBe(false);
    });

    test("greaterThan compares amounts correctly", () => {
      const a = Money.fromDollars(10);
      const b = Money.fromDollars(5);
      expect(a.greaterThan(b)).toBe(true);
      expect(b.greaterThan(a)).toBe(false);
    });

    test("lessThan compares amounts correctly", () => {
      const a = Money.fromDollars(5);
      const b = Money.fromDollars(10);
      expect(a.lessThan(b)).toBe(true);
      expect(b.lessThan(a)).toBe(false);
    });
  });

  describe("State Checks", () => {
    test("isZero checks for zero amount", () => {
      expect(Money.zero().isZero()).toBe(true);
      expect(Money.fromDollars(1).isZero()).toBe(false);
    });

    test("isNegative checks for negative amount", () => {
      expect(Money.fromDollars(-1).isNegative()).toBe(true);
      expect(Money.fromDollars(1).isNegative()).toBe(false);
    });

    test("isPositive checks for positive amount", () => {
      expect(Money.fromDollars(1).isPositive()).toBe(true);
      expect(Money.fromDollars(-1).isPositive()).toBe(false);
    });
  });
});
