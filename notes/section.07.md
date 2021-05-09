# Responsive normalization strategy

- libraries used
  - express-validator
  - [express async error](https://www.npmjs.com/package/express-async-errors) (already supported by express v5)

- different backend services have different response schema ==>**Tremendous issue**
  - we must have a consitency structured response for all servers --middlewares
  - how to solve this issue? **One doable solution is to create a shared library used by services**
- A billion things can go wrong. not just validation of inputs to a request handler, each of these needed to be handled consitently express erro handling mec

- [Error handling in express](https://expressjs.com/en/guide/error-handling.html)
  - asynchronous error handler: For errors returned from asynchronous functions invoked by route handlers and middleware, you must pass them to the next() function. (Express 5 handles promise automatically)
  - synchronous error handler: If synchronous code throws an error, then Express will catch and process it. 