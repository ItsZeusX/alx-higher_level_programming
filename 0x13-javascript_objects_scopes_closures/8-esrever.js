#!/usr/bin/node
exports.esrever = function (list) {
  const newList = [];
  for (let i = list.length, j = 0; i > 0; i--, j++) {
    newList[j] = list[i - 1];
  }
  return newList;
};
