function concat(a: string, b:string): string {
    return a + b
}

concat('1', '2')

type HowIDoItType = string;
type SimeArray = (number | string);

type WithDataType = {
    howIDoIt: HowIDoItType,
    simeArray: SimeArray[],
};

interface MyHometaskInterface {
    howIDoIt: HowIDoItType,
    simeArray: SimeArray[],
    withData: WithDataType[]
}

const MyHometask: MyHometaskInterface = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

interface MyArray<T> {
    [N: number]: T;
    reduce(cb: (accum: T, current: T, index?: number, arr?: T[]) => T): T;
    reduce<U>(cb: (accum: U, current: T, index?: number, arr?: T[]) => U, init: U): U
}

const arr:MyArray<number> = [1,2,3,4];
const a = arr.reduce((accum, current) => accum + current);
const b = arr.reduce((accum, current) => accum + current, 0);
