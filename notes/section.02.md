# The Blog App

## Some good habits to have when working with microservices

- Whenever you start designing a sergvice or putting it together it really worth a time to think very critically about exactlly what your services want to do.

  - The goal of post service

| path    | method | body?          | goal                  |
| ------- | ------ | -------------- | --------------------- |
| /posts/ | POST   | {title:string} | create a new post     |
| /posts/ | GET    | -              | retriew all the posts |

- The goal of comment service

| path                | method | body?            | goal                  |
| ------------------- | ------ | ---------------- | --------------------- |
| /posts/:id/comments | POST   | {content:string} | create a new post     |
| /posts/:id/comments | GET    | comment[]        | retriew all the posts |
