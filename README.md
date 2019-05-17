# wallis-product

[![Greenkeeper badge](https://badges.greenkeeper.io/KenanY/wallis-product.svg)](https://greenkeeper.io/)

[![Build Status][travis-svg]][travis]

Estimate pi with the [Wallis product][wallis].

## Example

``` javascript
var wallis = require('wallis-product');

wallis(10);
// => 3.0677038066434976

wallis(10000000);
// => 3.141592575082479
```

## Installation

``` bash
$ npm install wallis-product
```

## API

``` javascript
var wallis = require('wallis-product');
```

### `wallis(n)`

Returns an approximation of pi using the Wallis infinite product up to a term of
_Number_ `n`.


   [travis]: https://travis-ci.org/KenanY/wallis-product
   [travis-svg]: https://img.shields.io/travis/KenanY/wallis-product.svg
   [wallis]: https://en.wikipedia.org/wiki/Wallis_product