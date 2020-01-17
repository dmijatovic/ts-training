# [Home](../../README.md): Node - Express typescript app

This app is node-express server spiced with typescript types. In general there are 3 ways to apply typescript on standard JS library like express:

- Installing @types/express from npm @types repo: this is most common use
- Installing library that applies type decorators to 'normal' js library
- Creating cutom types on the top of the library on your own

As this is training of typescript, this project will use last (most complex) approach to teach how you might apply typescript on the top of non-type library.

The app itself will be quite rudamentary. The goals is to show how to apply types to express routes.

## Dependencies

```bash
# install express
npm i -s express @types/express body-parser cookie-session
# install dev dependencies
npm i -D nodemon concurrently ts-node typescript
```

## Monorepo

This is monorepo. The setup is done by creating package json and manually typing the dependencies in the package.json. Then `lerna bootstrap --hoist` is runnen to hoist all node_modules in the repo and create permalinks.
