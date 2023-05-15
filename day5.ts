function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
    const resultArray=[];

    for(let i=0;i<arr.length;i++)
    {
        if((fn(arr[i],i)))
        {
            resultArray.push(arr[i])
        }
    }

    return resultArray;
};