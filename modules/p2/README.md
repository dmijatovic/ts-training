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

# install type definition files for google maps
npm i @types/googlemaps

```
