# [lcg-random: (Predictable) LCG Random Number Generator](https://el-tramo.be/lcg-random)

Creates a [Linear Congruential Generator](http://en.wikipedia.org/wiki/Linear_congruential_generator)
for generating random numbers. The random numbers are predictable/reproducable, which is useful for 
(unit) testing purposes.


## Installation

    npm install lcg-random --save


## Usage

A call to the exported function returns a function that generates a random number
on every call:

	var lcgRandom = require("lcg-random");

	// Outputs 0.000005748588591814041 0.6551540484651923 0.30481433868408203
	var rand1 = lcgRandom();
	console.log(rand1(), rand1(), rand1());

	// Also outputs 0.000005748588591814041 0.6551540484651923 0.30481433868408203
	var rand2 = lcgRandom();
	console.log(rand2(), rand2(), rand2());


## API

### `lcgRandom(options)`

Returns a function that returns a random number between 0 and 1 every time it is called.

The function used is 

> X<sub>n+1</sub> = (multiplier \* X<sub>n</sub> + increment) % modulus

Every component of the function can be customized by setting it in the `options` argument.
The default values are the ones from the [GNU C Library](http://www.gnu.org/software/libc/)'s 
`rand()`.

- **`options.seed`** - *number (0 &leq; `options.seed` &lt; `options.modulus`)*  
    Seed (start value) for the generator.  
    Default: 0

- **`options.modulus`** - *modulus (0 &lt; `options.modulus`)*  
    Modulus for the generator.  
    Default: 2<sup>31</sup>

- **`options.multiplier`** - *modulus (0 &lt; `options.multiplier` &lt; `options.modulus`)*  
    Multiplier for the generator.  
    Default: 1103515245 

- **`options.increment`** - *modulus (0 &leq; `options.increment` &lt; `options.modulus`)*  
    Increment for the generator.  
    Default: 12345


## Project Status

[![Build Status](https://travis-ci.org/remko/lcg-random.svg?branch=master)](https://travis-ci.org/remko/lcg-random)

[![Coverage Status](https://coveralls.io/repos/remko/lcg-random/badge.png?branch=master)](https://coveralls.io/r/remko/lcg-random?branch=master)

[![Browser Support](https://ci.testling.com/remko/lcg-random.png)
](https://ci.testling.com/remko/lcg-random)
