# next-registry-choices
> Yeoman registry choices based on next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-registry-choices
```

## apis
| api  | params | description      |
| ---- | ------ | ---------------- |
| gets | -      | Get the choices. |

## usage
```js
import NxRegistryChoices from '@jswork/next-registry-choices';

NxRegistryChoices.gets();
/*
[
  {
    name: 'npm',
    value: {
      publish: 'https://registry.npmjs.org',
      install: 'https://registry.npmjs.org',
      private: false,
      access: 'public'
    }
  },
  {
    name: 'github',
    value: {
   //...   
*/
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-registry-choices/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-registry-choices
[version-url]: https://npmjs.org/package/@jswork/next-registry-choices

[license-image]: https://img.shields.io/npm/l/@jswork/next-registry-choices
[license-url]: https://github.com/afeiship/next-registry-choices/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-registry-choices
[size-url]: https://github.com/afeiship/next-registry-choices/blob/master/dist/next-registry-choices.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-registry-choices
[download-url]: https://www.npmjs.com/package/@jswork/next-registry-choices
