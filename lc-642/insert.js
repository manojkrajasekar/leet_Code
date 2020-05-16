AutoCompleteSystem.prototype.insert = function (sentence, times) {
  let node = this.trie;

  for (let char of sentence) {
    if (node[char] == null) node = {};
    node = node[char];
  }

  node.isEnd = true;
  node.times = node.times + 1 || times;
};
