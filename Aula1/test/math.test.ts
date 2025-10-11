// test/math.test.ts
import { sum } from "../src/math";

test("Deve somar 1+2", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
});
