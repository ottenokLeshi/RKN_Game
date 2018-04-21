import createLine from './lineControllers';
import lines from './lines';

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

for(let entry of nodeMap) { 
  //console.log(entry)
}

lines.forEach((line, index) => {
  createLine(line[0], line[1], index);
  
});
let matrix = [];
