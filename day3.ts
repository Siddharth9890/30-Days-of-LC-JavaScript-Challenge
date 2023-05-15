type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    const resetValue=init;
    return {increment:()=>init+=1,decrement:()=>init-=1,reset:()=>init=resetValue};
};