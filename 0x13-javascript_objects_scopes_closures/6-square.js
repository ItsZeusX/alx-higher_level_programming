#!/usr/bin/node
const s = require('./5-square');

module.exports = class Square extends s {
  charPrint (c) {
    if (!c) {
      c = 'X';
    }
    for (let i = 1; i <= this.height; i++) {
      for (let j = 1; j <= this.width; j++) {
        process.stdout.write(c);
      }
      process.stdout.write('\n');
    }
  }
};
