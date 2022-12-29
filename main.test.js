import {capitalize, reverseString, add, subtract, divide, multiply, caesarCipher, analyzeArray, object} from './main.js'


test("First letter capitalized", () => {
    expect(capitalize('joe')).toBe('Joe');
});
test("Reversed string", () => {
 expect(reverseString('joe')).toBe('eoj');
});
//calculator tests
test("Add two numbers", () => {
 expect(add(1, 2)).toBe(3);
});
test("Subtract two numbers", () => {
 expect(subtract(1, 2)).toBe(-1);
});
test("Divide two numbers", () => {
    expect(divide(3, 2)).toBe(1.5);
});
test("Multiply two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
});
//Caesar cipher
test("String shifted 1 place to the right, with z-a wrapping", () => {
 expect(caesarCipher("abcxyz")).toBe("bcdyza");
})
test("String shifted 1 place to the right, with black space", () => {
 expect(caesarCipher("abc xy z")).toBe("bcd yz a");
})
test("String shifted 1 place to the right, with punctuation", () => {
    expect(caesarCipher("abc!xy?z.")).toBe("bcd!yz?a.");
});
test("String shifted 1 place to the right, with case kept", () => {
    expect(caesarCipher("aBcxYZ.")).toBe("bCdyZA.");
});
// Analyze array
test("Analyze array: average", () => {
 expect(object.average).toBe(4);
});
test("Analyze array: min", () => {
    expect(object.min).toBe(1);
});
test("Analyze array: max", () => {
    expect(object.max).toBe(8);
});
test("Analyze array: length", () => {
    expect(object.length).toBe(6);
});