#!/usr/bin/node
if (!process.argv[2]) {
  console.log('undefined is undefined');
} else {
  console.log(process.argv[2].concat(' is ', process.argv[3]));
}
