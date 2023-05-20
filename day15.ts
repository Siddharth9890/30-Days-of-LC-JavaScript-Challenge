type F = (...p: any[]) => any

function debounce(fn: F, t: number): F {
    let timer;
    return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, t);
  };
};
