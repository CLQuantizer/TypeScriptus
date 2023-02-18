import {expect, it} from "vitest";

export const add = (a: number, b: number)=>{
    return a+b;
};

it("should be ok ", ()=>{
    expect(add(2, -3)).toEqual(-1);
    expect(add(5, 4)).toEqual(9);
});