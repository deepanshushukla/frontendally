const debounce = (func, wait) => {
  let timeout;
  return function executedFunction() {
    const context = this;
    const args = arguments;

    const timeOutFunc = () => {
      timeout = null;
      func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(timeOutFunc, wait);
  };
};
export default debounce;
