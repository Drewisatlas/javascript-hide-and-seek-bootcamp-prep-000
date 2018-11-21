function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector(" #nested .target");
}

function increaseRankBy(n) {
  let rankedLists = document.querySelectorAll(".ranked-list");
  for (let el of rankedLists) {
    let children = el.children;
    for (let li of children) {
      li.innerHTML = parseInt(li.innerHTML) + n;
    }
  }
}

function deepestChild() {
  let grandNode = document.querySelector('div#grand-node');
  let nestedNodes = grandNode.getElementsByTagName('div');
  return nestedNodes[nestedNodes.length - 1];
}
