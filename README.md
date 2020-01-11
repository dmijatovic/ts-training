# Typescript training (monorepo)

This project is monorepo of [Udemy Typescript training by Stephen Grinder](https://www.udemy.com/course/typescript-the-complete-developers-guide/). For the monorepo we use Lerna.

## LERNA setup

```bash
# initialize
npx lerna --init

# we changed default packages location to modules in lerna.json

# bootstrap modules and place node-modules at the top using --hoist
lerna bootstrap --hoist

# create first module
lerna create p1

# add axios and typescript as dependency
lerna add axios typescript ts-node

```

## Modules

All code from training is stored in modules folder. As there are multiple projects each of the projects is stored in its module folder.

- [P1](modules/p1/README.md): basic typescript project explaining type declarations.
- [P2](modules/p2/README.md): typesctipt app with Google maps to show location. It uses Parcel for bundling.
