# Typescript interfaces generation from GraphQL Server

## General  
In the project below there's an example of a react application that consumes data from GQL
In order to create a types from the graphql server using apollo cli, you would need to install [`apollo`](https://github.com/apollographql/apollo-tooling)
Follow the instructions below before generating types

## Quick Start
```
    $ cd client
    $ npm i
    $ cd ../server
    $ npm i
    $ npm start
```
This will get the server running on localhost:4000/graphql, we need a running server in order to extract the schema types from it.

Open a new terminal and generate the types
```
    $ cd client
    $ npm run codegen
```
Note that this command will populate the folder at `client/src/types`
Running the dev server
```
    $ npm start
```

### Notes
1. The apollo code generator requires GraphQL queries before it can generate the interfaces
This means that you should have a directory where you store and export the queries
In this project you can see the folder `client/src/queries`
The folder exports 2 types of queries.

2. In order to generate typescript or any other file, you need to have a running server that is reachable in compilation time

3. Its worth to put `npm run codegen` on the `npm build` as this can find mismatch between schemas while you're constantly working on the server, it might throw an ugly error but its worth catching this in time

