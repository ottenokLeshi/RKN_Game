import createLine from './lineControllers';
import lines from './lines';

lines.forEach((line, index) => {
  createLine(line[0], line[1], 'blue');
});

//setTimeout(startGame(20000), 1000);

