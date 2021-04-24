# Fundamental Ideas Around Microservices

- what is microservices
  > 1.  A microservice should be self contained
  > 2.  To reduce the crashes chance brought by dependencies between services, we introduced the event bus.
  > 3.  brought data duplication and understanding obstacle

It contains all the stuff that works one feature correctly.

- Data in microservice
  - Each service gets its database(if it needs one) for the following reasons[**Database-Per-Service** pattern]
    > 1.  We want every service to be able to act independently without depending on any service
    > 2.  If each service has its database, we can optimize what type of database we pick
    > 3.  A single database shared between many services would be a single point of failure
    > 4.  The data schema of a database might be changed unexpectly
  - Services will never, never reach into another service's database

Managing data between different services is a challenge.

- Big problem with data in services
  - We don't allow services to interact with databases that not owned by it directly
- communication strategies between services to solve data management in microservices
  1.  Sync
      Services communicate with each other using direct requests
      1. Upside:
      - easy to understand
      - don't need a database
      2. downside
         - Introduce an dependency between services
         - If any inter-service request fails, the overall request fails
         - The entire request is only as fast as the slowest request
         - can easily introduce webs of request
  2.  Async
      Services communicate with each other using events.
- Communiation using Event bus

  - The event flow:
    - Service D emit event data {type: UserQuery, data: {id}}
    - Service A(the UserService) emit data {type: UserQueryResult, data: {id, name: 'jill'}}
    - The order and the product purchase services handle the purchase and order information based on user id
  - Still has the downside mentioned in synchronouse communication way

- A crazy way of storing data

**Define the goal of the service first** ==> **Define the database structure**

- For service D, the goal is
  > Given the ID of a user, show the title and image for every product they have erver ordered
  - pros and cons
    Nowdays, data storage is cheaper
