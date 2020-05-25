function crawl(startUrl, htmlParser) {
  let visitedSet = new Set();
  let hostName = startUrl.substr(7).split("/")[0];

  visitedSet.add(startUrl);

  return dfsTraverse(startUrl);

  function dfsTraverse(url) {
    if (url.length < 1) return;

    for (let neigh of htmlParser.getUrls(url)) {
      if (visitedSet.has(neigh)) {
        continue;
      }
      if (neigh.substr(7).split("/")[0] == hostName) {
        visitedSet.add(neigh);
        dfsTraverse(neigh);
      }
    }

    return Array.from(visitedSet);
  }
}
