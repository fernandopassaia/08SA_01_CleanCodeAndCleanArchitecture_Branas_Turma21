"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// test/math.test.ts
const math_1 = require("../src/math");
test("Deve somar 1+2", () => {
    const result = (0, math_1.sum)(1, 2);
    expect(result).toBe(3);
});
