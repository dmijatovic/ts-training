# [HOME](../../README.md): Frontend framework with Typescript

This module creates a frontend framework that should be equvivalent to React :-).

## Setup

```bash
# create tsconfig file
npx tsc --init

```

- define custom directories for compiling the typesctipt

```json
/* Redirect output structure to the directory. */
"outDir": "./dist"
/* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
"rootDir": "./src"
```

- add nodemon and

```bash
# install node dev modules
npm i -D nodemon concurrently
````

- extend npm script to compile tsc files and nodemon to reload on changes. To run use `npm run dev` to start develpoing with not-reloading.

- Node type definition file for fs.

```bash
# install node type definitions file
npm i -D @types/node
```

- Parcel bundler

```bash
npm i -D parcel-bundler
```

## Lessons
