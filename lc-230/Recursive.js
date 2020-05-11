var kthSmallest = function (root, k) {
  let arr = [];
  let smallest = 0;
  const res = dfs(arr, root, k);
  return smallest;

  function dfs(arr, root, k) {
    if (!root) return null;

    if (root.left !== null) {
      dfs(arr, root.left, k);
    }

    arr.push(root.val);
    if (arr.length >= k) {
      smallest = arr[k - 1];
      return;
    }

    if (root.right !== null) {
      dfs(arr, root.right, k);
    }
  }
};
