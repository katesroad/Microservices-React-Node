# Runing services with Docker

- Deployment issues

  - the host and port is hardcoded in the event bus
  - scale services to multiple machines
  - load balancing

- Why Docker
  Containers wrap up everything that it needs for a program + how to start it.

- why Kubernetes
  - what is Kubernetes
    - Kubernetes is a tool for running a bunch of different containers
    - we give some configuration to describe how we want our containers to run and interact with each other
  - concepts
    - master: a program to manage everything inside the cluster
    - Kubernetes forwards the request to a proper service
  

