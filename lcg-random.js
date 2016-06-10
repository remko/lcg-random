'use strict';

function createLCGenerator(options) {
	options = options || {};
	var seed = options.seed || 0;
	var a = typeof options.multiplier === 'undefined' ? 
		1103515245 : options.multiplier;
	var c = typeof options.increment === 'undefined' ? 
		12345 : options.increment;
	var m = typeof options.modulus === 'undefined' ?
		2147483648 : options.modulus;

	var state = Math.abs(seed) || 0;
	return function () {
		var result = (state*a + c) % m;
		state = result;
		return result / m;
	};
}

module.exports = createLCGenerator;
