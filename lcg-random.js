'use strict';

function createLCGenerator(options) {
	options = options || {};
	var seed = options.seed || 0;
	var a = options.multiplier || 1103515245;
	var c = options.increment || 12345;
	var m = options.modulus || 2147483648;

	var state = Math.abs(seed) || 0;
	return function () {
		var result = (state*a + c) % m;
		state = result;
		return result / m;
	};
}

module.exports = createLCGenerator;
