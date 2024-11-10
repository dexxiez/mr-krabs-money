export class Money {
  private cents: bigint;

  private constructor(cents: bigint) {
    this.cents = cents;
  }

  static fromDollars(amount: number): Money {
    // Round to 2 decimal places and convert to cents
    const cents = BigInt(Math.round(amount * 100));
    return new Money(cents);
  }

  static fromCents(cents: number | bigint): Money {
    return new Money(BigInt(cents));
  }

  static zero(): Money {
    return new Money(BigInt(0));
  }

  add(other: Money | number): Money {
    if (other instanceof Money) {
      this.cents += other.cents;
    } else {
      this.cents += BigInt(Math.round(other * 100));
    }
    return this;
  }

  subtract(other: Money | number): Money {
    if (other instanceof Money) {
      this.cents -= other.cents;
    } else {
      this.cents -= BigInt(Math.round(other * 100));
    }
    return this;
  }

  multiply(factor: number): Money {
    // Round after multiplication to avoid floating point weirdness
    this.cents = BigInt(Math.round(Number(this.cents) * factor));
    return this;
  }

  clone(): Money {
    return new Money(this.cents);
  }

  get dollars(): number {
    return Number(this.cents) / 100;
  }

  get asCents(): bigint {
    return this.cents;
  }

  format(): string {
    return this.dollars.toFixed(2);
  }

  equals(other: Money): boolean {
    return this.cents === other.cents;
  }

  greaterThan(other: Money): boolean {
    return this.cents > other.cents;
  }

  lessThan(other: Money): boolean {
    return this.cents < other.cents;
  }

  isZero(): boolean {
    return this.cents === BigInt(0);
  }

  isNegative(): boolean {
    return this.cents < BigInt(0);
  }

  isPositive(): boolean {
    return this.cents > BigInt(0);
  }
}
