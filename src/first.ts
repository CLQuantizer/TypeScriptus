import {expect, it} from "vitest";

export const add = (a: number, b: number)=>{
    return a+b;
};

it("should be ok ", ()=>{
    expect(add(2, 4)).toEqual(6);
    expect(add(5, 4)).toEqual(9);
});