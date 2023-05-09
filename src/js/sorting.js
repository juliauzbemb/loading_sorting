function isNumber(element) {
  if (isNaN(element)) {
    return false;
  }
  return true;
}

export const sortBy = function (arr, ...sortByArgs) {
  let left, right;
  arr.sort(function (a, b) {
    let sortResult = 0;
    sortByArgs.forEach(function (arg) {
      if (isNumber(a.dataset[arg])) {
        left = Number(a.dataset[arg]);
        right = Number(b.dataset[arg]);
      } else {
        left = a.dataset[arg];
        right = b.dataset[arg];
      }
      if (sortResult != 0) {
        return;
      }
      if (left < right) {
        sortResult = -1;
        return;
      }
      if (left > right) {
        sortResult = 1;
        return;
      }
    });
    return sortResult;
  });
};
