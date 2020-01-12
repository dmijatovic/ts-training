# [HOME](../../README.md): Google markers with Typescript

This app generates user and company location randomly and shows it on Google Maps.
This app uses Parcel bundler.

## Parcel for compiling

`npm start` to start the app.

## LERNA steps

This project is part of monorepo that uses LERNA.

```bash

# crate new module

lerna create p2

# add parcel
lerna add parcel-bundler

```

## Project info

To create fake info we use [faker](https://www.npmjs.com/package/faker)

```bash
# install faker
npm i -s faker

# install definition file for faker from definetly typed
npm i @types/faker

# include GoogleMaps in the header of index.html file
# install type definition files for google maps
npm i @types/googlemaps

```

### Google Maps with typescript

The GMaps is imported js file from google apis in index.html file. In order to work with typescript the types need to be imported into project. This should be sufficient.
However in case of some code errors durign implementation the google namespace might not be recognized. This is kindof incorrect pointing to error. The folowing declarations can be done in order to remove typescript error BUT check firts your code, high likely the error is somewhere in your code.

```javascript
// use this import statement and declaration
// in the class where google maps is used
import {google} from 'googlemaps'
declare var google:google

```
