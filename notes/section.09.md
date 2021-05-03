# Authentication Strategies and Options

- User auth with microservice is an unresolved problem
- there are many ways to do it, and no one-ways are right

- solution Options

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

- Option 2
  - downside
    - interaction with auth service
      - step one
        - request -> auth service
        - auth service -> token and other data required
      - step two request -> order service
    - interaction with order service
      - steps
        - after baning the user who has already logined in at the auth service
        - even if the user is banded, the JWT token is still valid
      - solution
- compare option 1 to option two
  - #option 1
    - change to auth state are immdiately reflected to other services
    - auth services goes down? Entier app is broken
  - #option 2
    - Auth service is down? who cares
    - Some user got banned? Darn, i just gave them the keys to my cars 5 minutes ago

Hybrid async and sync communication

- How to get rid of the big issue of the option2: <br>
  - **JWT token and refresh token**(window time is acceptable)
    - the shared authentication lib requests the auth service with refresh token
    - order rejects the request, client requests the token with new token refreshed from auth service
  - Window time is unbearable
    - reflect the authentication change => send user baned event to other services
    - persist the baned users cache inside the authentication required services(build it to a shared library)
- Secret storage with Kubernetes
  - Video 167
