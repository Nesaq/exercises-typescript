function reverse(coll: readonly number[]) {
  const init: number[] = [];
  const result = coll.reduce((acc, value, index) => {
    acc[coll.length - index - 1] = value;
    return acc;
  }, init);

  return result;
}

export default reverse;
