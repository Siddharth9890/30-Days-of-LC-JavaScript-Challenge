type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
	return async function(...args) {
        const functionPromise=fn(...args);

        const timePromise=new Promise((_,reject)=>{
            setTimeout(()=>{reject("Time Limit Exceeded")},t)
        });

        return Promise.race([functionPromise,timePromise]);
    }
};
