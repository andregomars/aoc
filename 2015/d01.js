export default (input) => {
  if (!input || input.length < 1) {
    return 0;
  }

  return [...input].reduce((acc, cur) => acc += cur === `(` ? 1 : -1, 0);

};
