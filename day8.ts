function once<T extends (...args: any[]) => any>(fn: T): 
 ((...args: Parameters<T>) => ReturnType<T> | undefined) {
     let callednOnce = false;
  return function (...args) {
      if(!callednOnce){
          callednOnce = true;
          return fn(...args);
      }
  };
}

