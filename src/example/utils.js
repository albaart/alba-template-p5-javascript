export const randomChoice = (p, arr) => {
  const index = Math.floor(p.random(0, arr.length));
  return arr[index];
};
