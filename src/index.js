import createLine from './lineControllers';
import lines from './lines';

lines.forEach(line => {
  createLine(line[0], line[1], 'blue')
  console.log(line)
});