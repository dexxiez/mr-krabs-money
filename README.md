                                                                                                     
                                            @ # @     @ @% @                                         
                                            #@#@@     @@%@#@                                         
                                             @:@@      @=@@                                          
                                            @::::     @::::                                          
                                            %::::@   @:::::@                                         
                                            :::::@   @:::::@                                         
                                            :::::*   ::::::@                                         
                                           @:::::=   ::::::@                                         
                                           @:::::*   ::::::@                                         
            @@*******@@                     :::::%   :::::%                                          
          @*::::::******@                   :::::@   :::::@                                          
        @*::::::::*******#                  *:. -@   :-.@:@                                          
       @*:::::::**********@                 @:@@%@   :@@@:                                           
      @*::::::*********                      ::::@   #:@:@                                           
      @*:::::*********@                      %:::@   @:::@                                           
      **::::********%     @@@                 :::@   @:::                                            
      #*:::**********@    %***@               =::@   @::@                                            
      @************@     ******@         #@    ::@@@@@::@                                            
      @**************@   @*****%            @#@@%*****::                                             
       @************@   ****::*@       @***%@%**#*******%@@@                                         
        @************#@%***::*@       @*     %%******%@    @**                                       
         @#**************:::*@        @* *                @ %*@                                      
            @*************@            *@    :%      =@#    **                                       
                @@@***@                 **                @*%*@                                      
                   %**@                 @***@#        *@******@@@                                    
                   @**@           @@@@@*******@******#*****@::::::::*%@@@                            
                    @**@        @*-::+@:@***********#@@:::::::::::::@@**********@                    
                     @************@=:::::  .@:@::::::::::::::::::%@#::@      @**@                    
                                 *@::::::@:::::::%+::::::::::::::::@        @**@                     
                              @=*#::::::::::::::::::::::::::::::::::@@@     **@ @@@                  
                              @#===%:::::::::::::::::::::::::::::::@==@   @**@*::+****@              
                             @@@======%@:::::::::::::::::::::*@%=======@ @*@*::::******#             
                           @=%@==@@@----@====#@@@@@@@@@==========#@@@@==@***::**********@            
                          @=====%@@@@@@@@@%*=================@@@@@@@@@@=********#*@@*@@@  @@         
                          #=======@-@@@@@-@@@@@@@@@@@@@@@====@@@@@@@===@*******@         ****@       
                         @=========%--+@@=@@@@@@@@@@@@@@@*===@@=======@**********      #******@      
                         @=========*===#=================#============@**********@***@@********      
                          @========@==@@==============================%*******************-=***      
                           @=======*==@@===============================@****************:::::**      
                            @=========%@===============================@**************::::::**@      
                              @=====@==================================@@**********::::::::*%@       
                                @=====@==============================@    @#*****:::::::-*@@         
                                  @==#===========================@@          @@%******#@@            
                                  *====%@=====================@                                      
                                   @@+=====@@@@@@%@@@@@@@+=====                                      
                                    @****           @@=========@                                     
                                     %**@              @****@                                        
                                      @@                ****@                                        
                                                        @**@               

# Mr Krabs Money Class Documentation
*"MONEY! MONEY! MONEY!"* - Mr. Krabs 🦀

A type-safe class for handling monetary values in TypeScript, preventing floating-point precision errors by storing amounts as cents in BigInt.

## Key Features
- Precise decimal calculations
- Safe arithmetic operations
- Immutable value semantics
- Formatting utilities
- Comparison methods

## Creating Money Objects

### `static fromDollars(amount: number): Money`
Creates a Money instance from a dollar amount.

```typescript
// Mr. Krabs calculating his daily revenue
const dailyRevenue = Money.fromDollars(496.99);
console.log(dailyRevenue.format()); // "496.99"
```

### `static fromCents(cents: number | bigint): Money`
Creates a Money instance from a cent amount.

```typescript
// Mr. Krabs counting every last cent from the register
const penniesFound = Money.fromCents(4242);
console.log(penniesFound.format()); // "42.42"
```

### `static zero(): Money`
Creates a Money instance with zero value.

```typescript
// Starting Mr. Krabs' daily profits counter
let dailyProfits = Money.zero();
```

## Operations

### `add(other: Money | number): Money`
Adds another monetary value.

```typescript
// Mr. Krabs calculating Krabby Patty sales
const pattyPrice = Money.fromDollars(5.99);
let totalSales = Money.zero();

// After selling 3 Krabby Patties
totalSales.add(pattyPrice).add(pattyPrice).add(pattyPrice);
console.log(totalSales.format()); // "17.97"
```

### `subtract(other: Money | number): Money`
Subtracts another monetary value.

```typescript
// Mr. Krabs calculating profits after paying SpongeBob
const revenue = Money.fromDollars(1000);
const spongebobSalary = Money.fromDollars(7.25);

const profit = revenue.clone().subtract(spongebobSalary);
console.log(profit.format()); // "992.75"
```

### `multiply(factor: number): Money`
Multiplies the amount by a factor.

```typescript
// Mr. Krabs calculating a week's worth of profits
const dailyProfit = Money.fromDollars(100);
const weeklyProfit = dailyProfit.clone().multiply(7);
console.log(weeklyProfit.format()); // "700.00"
```

## Getters and Formatting

### `dollars: number`
Gets the amount in dollars as a number.

```typescript
const safe = Money.fromDollars(10000);
console.log(`Mr. Krabs has $${safe.dollars} in his safe!`);
```

### `asCents: bigint`
Gets the raw cent amount as a BigInt.

```typescript
const penny = Money.fromCents(1);
console.log(`A penny is worth ${penny.asCents} cent`);
```

### `format(): string`
Formats the amount as a string with 2 decimal places.

```typescript
// Mr. Krabs writing his ledger
const tip = Money.fromDollars(3.50);
console.log(`Tip received: $${tip.format()}`);
```

## Comparison Methods

### `equals(other: Money): boolean`
Checks if two monetary values are equal.

```typescript
// Mr. Krabs checking if he got exact change
const price = Money.fromDollars(9.99);
const paid = Money.fromDollars(10.00);
console.log(price.equals(paid)); // false
```

### `greaterThan(other: Money): boolean`
Checks if this amount is greater than another.

```typescript
// Mr. Krabs comparing today's profits with yesterday's
const today = Money.fromDollars(531.42);
const yesterday = Money.fromDollars(489.99);
if (today.greaterThan(yesterday)) {
    console.log("Arg arg arg! Better than yesterday!");
}
```

### `lessThan(other: Money): boolean`
Checks if this amount is less than another.

```typescript
// Mr. Krabs checking if he's losing money
const expenses = Money.fromDollars(100);
const income = Money.fromDollars(95);
if (income.lessThan(expenses)) {
    console.log("We're losing money! SPONGEBOB!");
}
```

## State Checking

### `isZero(): boolean`
Checks if the amount is zero.

```typescript
// Mr. Krabs checking the register
const register = Money.zero();
if (register.isZero()) {
    console.log("EMPTY REGISTER! WHO TOOK ME MONEY?!");
}
```

### `isNegative(): boolean`
Checks if the amount is negative.

```typescript
// Mr. Krabs checking his bottom line
const balance = Money.fromDollars(-10);
if (balance.isNegative()) {
    console.log("We're in the red! Cut everyone's salary!");
}
```

### `isPositive(): boolean`
Checks if the amount is positive.

```typescript
// Mr. Krabs checking if there's any profit
const profit = Money.fromDollars(0.01);
if (profit.isPositive()) {
    console.log("At least we made something! Arg arg arg!");
}
```

## Best Practices
1. Always use `clone()` when you need to perform calculations on a copy
2. Use `fromDollars()` for user input and `fromCents()` for internal calculations
3. Always compare Money objects using the provided comparison methods
4. Use `format()` when displaying values to users

