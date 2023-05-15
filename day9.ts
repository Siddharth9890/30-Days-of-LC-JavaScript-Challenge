type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
  const cacheObject = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cacheObject) {
      return cacheObject[key];
    }else{
    const result = fn(...args);
    cacheObject[key] = result;
    return result;
    }
  }
}

