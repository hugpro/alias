# alias

This project uses the verb definition of "alias", which is to "misidentify (a signal frequency), introducing distortion or error". Given a string, return another string that is a _distorted_ version of the original string.

This project uses [Node.js][node], [Express.js][express] for it's building blocks. For testing purposes it uses [Jest][jest], and [Supertest][supertest] for testing API endpoints. For a nicer development environment, it uses [Nodemon][nodemon] to reload the Node.js application automatically on file changes in the directory.

## Getting started

0. Install dependencies, `npm install`
1. Start server
   a) Start development server with [Nodemon][nodemon] `npm run dev`
   b) Start server `npm start`
1. Run tests
   a) Once: `npm test`
   b) On every code change: `npm run watch`

## API

### GET /generate/:string

Returns a JSON object with the encoded string give (`:string`):

```JSON
{
  "value": "ENCODED_STRING"
}
```

At the moment this encoded string is simply the reversed string given.

[express]: https://expressjs.com
[jest]: https://jestjs.io
[node]: https://nodejs.org
[nodemon]: https://github.com/remy/nodemon
[supertest]: https://www.npmjs.com/package/supertest
