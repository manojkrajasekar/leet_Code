function lengthOfLongestSubstring(s) {
  let str = s;

  let wordMap = new Map();
  let maxDiff = 0;

  for (let left = 0, right = 0; right < str.length; right++) {
    if (wordMap.get(str.charAt(right))) {
      left = Math.max(wordMap.get(str.charAt(right)), left);
    }
    maxDiff = Math.max(right - left + 1, maxDiff);

    wordMap.set(str.charAt(right), right + 1);
  }

  return maxDiff;
}
