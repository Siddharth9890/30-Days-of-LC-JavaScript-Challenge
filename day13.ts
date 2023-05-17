type F = () => Promise<any>;

async function promisePool(functions: F[], n: number): Promise<any> {
    async function executeFunction(){
        if(functions.length===0) return;
        const fn=functions.shift();
        await fn();
        await executeFunction();
    }
    let test:Array<Number>=new Array(n);
    const allPromises=test.fill(0).map(executeFunction);
    await Promise.all(allPromises);
};
