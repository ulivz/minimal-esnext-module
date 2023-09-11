<h1 align="center">minimal-esnext-module</h1>

<p align="center">
    A minimal esnext module used to test bundler behaviors.
</p>

<p align="center">
    <a href="https://npmjs.com/package/minimal-esnext-module"><img src="https://img.shields.io/npm/v/minimal-esnext-module.svg?style=flat" alt="NPM version"></a> 
    <a href="https://npmjs.com/package/minimal-esnext-module"><img src="https://img.shields.io/npm/dm/minimal-esnext-module.svg?style=flat" alt="NPM downloads"></a> 
    <a href="https://circleci.com/gh/saojs/minimal-esnext-module"><img src="https://img.shields.io/circleci/project/saojs/minimal-esnext-module/master.svg?style=flat" alt="Build Status"></a> 
</p>

## Motivation

Some meta frameworks doesn't transpile `node_modules` by default, and it's very common to troubleshot issues caused by esnext syntax located at  `node_modules`. This module created some minimal functions for you to test bundler behaviors.

## Quick Start

```bash
npm i minimal-esnext-module
```

## API

### `async`

```ts
import { asyncFunc } from 'minimal-esnext-module';

asyncFunc();
```

### `Top-level await`

```ts
import { TOP_LEVEL_AWAIT } from 'minimal-esnext-module/top-level-await';

console.log(TOP_LEVEL_AWAIT);
```

## Contribution Guide

```bash
npm run bootstrap   # install dependencies
npm run clean       # clean dependencies
npm run dev         # development both cjs and esm output
npm run build       # build both cjs and esm
npm run lint        # lint code
npm run lint:fix    # fix all code lint errors
npm run test        # run all tests
npm run cov         # run all tests and generate coverage report
npm run release     # release this package
```

## License

MIT &copy; [ULIVZ](https://github.com/ulivz)
