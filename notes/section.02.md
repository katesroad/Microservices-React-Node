# The Blog App

## Some good habits to have when working with microservices

- Whenever you start designing a service or putting it together, it is worth thinking very critically about exactly what your services want to do.

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

- Import a Query service Posts
  - the data schema for query service
    |id | title|comments|
    |---|------|---------|
    |he23| Yes | [] |
  - Event format for query service

```ts
type PostEvent = {
  type: "PostCreated" | "PostDeleted";
  data: { id: string; title?: string };
};

type CommentEvent = {
  type: 'CommentCreated" | "CommentDeleted" | "CommentUpdated",
  data: {commentId:string, postId?:string}
}
```

- Q & A for the solution
  ![qa](./imgs/section2.qa.png)

- Solutions for adding a moderation service

  - Option One: send comment event from moderation to query service
    > 1.  cons: what if the moderation operation handled by human?
  - Option Two: send comment both to moderation service and query service.

    - cons
      - The query service for presentation only purpose, it should invovle in much logic handling
      - There could be many event sources for comment

  - Option three:
    - cons
