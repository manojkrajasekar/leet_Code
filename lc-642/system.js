var AutocompleteSystem = function (sentences, times) {
  this.trie = {};
  this.inputString = "";
  for (let index = 0; index < sentences.length; index++) {
    this.insert(sentences[index], times[index]);
  }
};

/**
 * @param {string}
 * @return {}
 */
AutocompleteSystem.prototype.insert = function (sentence, times) {
  let node = this.trie;

  for (let char of sentence) {
    if (node[char] == null) {
      node[char] = {};
    }
    node = node[char];
  }
  node.isEnd = true;
  node.times = node.times + 1 || times;
};

AutocompleteSystem.prototype.input = function (c) {
  if (c == "#") {
    this.insert(this.inputString, 1);
    this.inputString = "";
    return [];
  }

  this.inputString += c;
  let node = this.trie;
  let result = {};

  for (let char of this.inputString) {
    if (node[char]) {
      node = node[char];
    } else return [];
  }

  function dfs(root, char) {
    for (let key in root) {
      if (key == "isEnd") {
        if (!result[root.times]) {
          result[root.times] = [];
        }

        result[root.times].push(char);
        result[root.times].sort();
      }

      dfs(root[key], char + key);
    }
  }

  dfs(node, this.inputString);

  let sorted = [];
  let sortedKeys = [...Object.keys(result)].sort((a, b) => b - a);
  for (let key of sortedKeys) sorted.push(...result[key]);

  return sorted.slice(0, 3);
};
