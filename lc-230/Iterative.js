function kthSmallest() {
  if (!root) return null;

  let stack = [];
  let node = root;

  while (stack.length || node) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();

    if (--k == 0) {
      return node.val;
    }

    node = node.right;
  }

  return null;
}
