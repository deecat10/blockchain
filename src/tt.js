const SHA256 = require('crypto-js/sha256');

function hash(a){
	return SHA256(SHA256(a));
}

console.log(`SHA256 Hash: ${hash('this is a hash')}`);
console.log("************************************");
console.log(`SHA256 Hash: ${hash('Blockchain Rock!')}`);