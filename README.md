# wallis-product

Estimate pi with the [Wallis product][wallis].

## Example

``` javascript
const wallis = require('wallis-product');

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
const wallis = require('wallis-product');
```

### `wallis(n)`

Returns an approximation of pi using the Wallis infinite product up to a term of
_Number_ `n`.


   [wallis]: https://en.wikipedia.org/wiki/Wallis_product
