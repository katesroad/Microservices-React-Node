# Authentication Strategies and Options

- User auth with microservice is an unresolved problem
- there are many ways to do it, and no one-ways are right
- solutions
  - #1. Allow sync request from other services to auth service: ** Request => Order Service => Auth Service**
    - downside
      - what if the auth service is down? Auth service is down => other services that rely on it has no idea if the user is authenticated or not
  - #1.1
    - **Request -> Auth -> Order Service**
    - Downside: if the auth service is down, Request can't reach any services
  - #2 Teach the other authentication required services to detect the authentication by its own <br>
    - Solution: Request => Order Service **(Inside order service, it check the authentication)**
    - downside:
      - we are going to end up authentication duplication => move the duplication to a shared library
      - Communication between microservices is challenging
