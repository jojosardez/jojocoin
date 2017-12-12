'use strict';

const Block = require('./block.js');
const Blockchain = require('./blockchain.js');

var now = new Date(); 
var now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());

let jojocoin = new Blockchain();
jojocoin.addBlock(new Block(1, now_utc, { amount: 123.45 }));
jojocoin.addBlock(new Block(2, now_utc, { amount: 678.90 }));

console.log("Is blockchain valid? " + jojocoin.isChainValid());
console.log(JSON.stringify(jojocoin, null, 4));

//try to simulate invalid chain
jojocoin.chain[1].data = { amount: 999.99 };
jojocoin.chain[1].hash = jojocoin.chain[1].calculateHash();
console.log("\n\nIs blockchain valid? " + jojocoin.isChainValid());
console.log(JSON.stringify(jojocoin, null, 4));
