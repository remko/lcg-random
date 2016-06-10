'use strict';

var lcgRandom = require('../lcg-random');
var expect = require('chai').expect;

describe('lcg-random', function () {
	it('should return a function that returns numbers between 0 and 1', function () {
		var generator = lcgRandom({seed: 42});
		for (var i = 0; i < 1000; ++i) {
			var randomNumber = generator();
			expect(randomNumber).to.be.at.least(0);
			expect(randomNumber).to.be.below(1);
		}
	});

	it('should return the same functions for same seed', function () {
		expect(lcgRandom({seed: 42})()).to.equal(lcgRandom({seed: 42})());
	});

	it('should return a function that returns many different numbers', function () {
		var generator = lcgRandom();
		var results = [true];
		var state = 0;
		for (var i = 0; i < 1000; ++i) {
			state = generator(state);
			expect(results[state]).to.not.exist;
			results[state] = true;
		}
	});

	it('should support Lehmer random number generators', function () {
		var generator = lcgRandom({
			seed: 123456,
			multiplier: Math.pow(7, 5),
			modulus: Math.pow(2, 31)-1,
			increment: 0
		});
		expect(Math.floor(generator()*1000)).to.equal(966);
		expect(Math.floor(generator()*1000)).to.equal(129);
	});
});
