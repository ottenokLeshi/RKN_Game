import createLine from './lineControllers';
import lines from './lines';
import getRandomInteger from './game/index'

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
console.log(matrix)

let maxVisibleLines = getRandomInteger(Math.round(lines.length/4), Math.round(lines.length * 2/3))

window.lastLine = maxVisibleLines;
window.lines = lines
lines.forEach((line, index) => {
  if (index < maxVisibleLines) {
    createLine(line[0], line[1], index, nodeMap, );
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
