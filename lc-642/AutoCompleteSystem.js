this.trie = {};

function AutoCompleteSystem(sentences, times) {
  this.trie = {};
  this.inputString = "";

  for (let index = 0; index < sentences.length; index++) {
    this.insert(sentences[index], times[index]);
  }
}
