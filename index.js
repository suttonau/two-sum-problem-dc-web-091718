const bruteForceTwoSum = (arr, target) => {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === target - arr[i]) {
        results.push([arr[i], arr[j]]);
      }
    }
  }
  return results;
};
