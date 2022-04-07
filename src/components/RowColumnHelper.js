export const getRows = (tries, level) => {
  let numTries = tries[level];
  return Array(numTries)
    .fill(null)
    .map((_, i) => i);
};

export const getColumns = (wordLength, level) => {
  let numletters = wordLength[level];
  return Array(numletters)
    .fill(null)
    .map((_, i) => i);
};
