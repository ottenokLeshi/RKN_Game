import createLine from './lineControllers';
import lines from './lines';
import getRandomInteger from './game/index'
import dfs from './game/dfs';
import SVG from 'svg.js'

const nodeSet = new Set();
const nodeMap = new Map();
lines.forEach(line => {
  nodeSet.add(line[0])
  nodeSet.add(line[1])
});
const sizeOfMatrix = nodeSet.size
let index = 0;
nodeSet.forEach(node => {
  nodeMap.set(node, index)
  index += 1;
});

window.linesArray = []


window.svg= '<svg width="24" height="24" ' +
  'xmlns="http://www.w3.org/2000/svg">' +
  '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
  'height="22" /><text x="12" y="18" font-size="12pt" ' +
  'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
  'fill="white"></text></svg>';
window.matrix = [];

for (let i = 0; i < sizeOfMatrix; i++) {
  matrix.push([])
  for (let j = 0; j < sizeOfMatrix; j++){
    window.matrix[i].push(0)
  }
}

lines.forEach((line, index) => {
  let i = nodeMap.get(line[0])
  let j = nodeMap.get(line[1])
  window.matrix[i][j] = 1;
  window.matrix[j][i] = 1;
});

let maxVisibleLines = getRandomInteger(Math.round(lines.length/4), Math.round(lines.length * 2/3))

window.lastLine = maxVisibleLines;
window.lines = lines
window.proxyArray = [0, 5]
window.dfs = dfs
window.toRed = []
window.peopleLife = window.matrix.length
document.getElementById('left').innerHTML = `Devices left: ${window.matrix.length}`

lines.forEach((line, index) => {
  if (index < maxVisibleLines) {
    createLine(line[0], line[1], index, nodeMap, dfs, getRandomInteger);
  };
});


map.addEventListener('tap', (evt) => {

  let result = 0;
  for (let i = 0; i < sizeOfMatrix; i++) {
    var resultRow = matrix[i].reduce(function(sum, current) {
      return sum + current;
    }, 0);
    result += resultRow
  }
  if (result === 0) {
    alert("Вы заблокировали всех пользователей Telegram")
  }
});

