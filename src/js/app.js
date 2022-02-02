export default function orderByProp(obj, arr) {
  const result = [];
  arr.forEach((key) => {
    result.push({
      key,
      value: obj[key],
    });
  });
  Object.keys(obj).sort().forEach((key) => {
    if (arr.includes(key)) {
      return;
    }

    result.push({
      key,
      value: obj[key],
    });
  });
  return result;
}
