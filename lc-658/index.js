function findClosestElements(arr, k, x) {
  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (x - arr[mid] > arr[mid + k] - x) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return arr.slice(start, start + k);
}
