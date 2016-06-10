'use strict';

function createLCGenerator(options) {
	options = options || {};
	var seed = options.seed || 1;
	var a = typeof options.multiplier === 'undefined' ? 
		16807 : options.multiplier;
	var c = typeof options.increment === 'undefined' ? 
		0 : options.increment;
	var m = typeof options.modulus === 'undefined' ?
		2147483647 : options.modulus;

	var state = Math.abs(seed) || 0;
	return function () {
		var result = (state*a + c) % m;
		state = result;
		return result / m;
	};
}

module.exports = createLCGenerator;
