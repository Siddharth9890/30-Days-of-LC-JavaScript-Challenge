type F = (...args: any[]) => void

function throttle(fn: F, t: number): F {
    let prev = -1;
    let time = null;
    
    return function(...args) {
        var currTime = Date.now();
        if(currTime - prev >=t){
            fn(...args);
            prev = currTime;
        }else{
            clearTimeout(time);
            time= setTimeout(()=>{
                fn(...args);
                time = null;
                prev += t;
            }, prev+t-currTime);
        }
    }
    
};
