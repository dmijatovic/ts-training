# [HOME](../../README.md): Sorting module in NodeJS & Typescript

This module creates sorting class that can sort numbers, strings and linked lists.
This module will use typescript compiler with custom setup defined in tsconfig.json file.

The sorting algorithm used is `bubble sort`. It is not most populair algo and it used here only for purpose of demonstrating typescript use in nodeJS.

More infor about [bubble sort is here](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-24.php).

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

## Inheritance

BubbleSort v1 class will borrow
