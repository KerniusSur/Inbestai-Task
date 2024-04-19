const debounce = (fn: Function, ms = 300) => {
  let debounce: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(debounce);
    debounce = setTimeout(() => fn.apply(this, args), ms);
  };
};

export default debounce;
