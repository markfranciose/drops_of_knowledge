Export var1Boolean variable of boolean type with value true.

export var var1Boolean: boolean = true;
export var var2Decimal: number = 6;
export var var3Hex: number = 0xf00d;
export var var4Binary: number = 0b111111;
export var var5Octal: number = 0o744;

String
export var var6String: string = "Hello, world!";


export var var7Array: 
export var var8NumericArray: number[] = [1,2,3,4,5];
Export var7Array variable of array type with value [1, 'test', {a: 3}, 4, 5].
Export var8NumericArray variable of numeric generic array type with value [1, 2, 3, 4, 5].
Tuple

Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same.

Export var9Tuple variable of tuple type with value ['key', 12345] - i.e. it should represent a value as a pair of a string and a number.
Enums

Export var10Enum variable with value Color.Blue from enum export enum Color {Red = 1, Green = 2, Blue = 4}.
Any

We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content, e.g. from the user or a 3rd party library. In these cases, we want to opt-out of type-checking and let the values pass through compile-time checks. To do so, we label these with the any type.

Export var11ArrayOfAny variable of Array<any> type with value [1, 'test', {a: 3}, 4, 5].
Void

Export var12VoidFunction function that returns void.
Null and Undefined

Export var13Null variable with type and value null.
Export var14Undefined variable with type and value undefined.
Never

Export var15NeverFunction function that returns never value.
P.S. Solved this kata? Take a look at other katas in "Learning TypeScript" collection.
