#!/usr/bin/node
if (!parseInt(process.argv[2])) {
  console.log('Not a number');
} else {
  console.log('My number: %d', parseInt(process.argv[2]));
}
