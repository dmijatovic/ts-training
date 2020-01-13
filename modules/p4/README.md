# [HOME](../../README.md): Premier League Football & Typescript

This module will take Premier League results of 2019 and analyse these.
The data is in CSV format. The analyses and reports are:

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

## Footbal.csv data

The data is csv file without the headers stored in data folder. The coloms are:

- match date: format DD/MM/YYYY
- home team name: string
- away team name: string
- home team goals: number
- away team goals: number
- match result: H-home team won, A-away team won, D-draw
- refferee name

## Lessons

This project handles:

- `Enums`: enumerating constants to better understand data.
- `Tuples`: used to describe row having different types of values
- `Abstract classes`: classes used to store shared methods
- `Generic classes`: allows to have dynamic types defined during execution

### Generic class and inheritance pattern

The inheritance approach with abstract and generic classes is stored in `/inheritance` folder.

```javascript

// Generic class passing type of data
class HoldAnyDataType<AnyDataType>{
  data: AnyDataType[];
}

const numbers = new HoldAnyData<number>()
numbers.data=[1,2,3,4]

const strings = new HoldAnyData<string>()
strings.data=['a','b','c']

```

### Interface approach

The same problem of code composition using interfaces instead of inheritance is stored in `/interface` folder.

## Inheritance vs. composition

- inheritance: characteristic `is a`
- composition: characteristic `has a`

Composition is more flexible on the long run. The composition using classes (and not plain function programming) is best achieved using interfaces, as we did in this example.

So look at this example again.
