# Runing services with Docker

- Deployment issues

  - the host and port is hard coded in the event bus
  - scale services to multiple machines
  - load balancing

- Why docker
  Contianers wrap up everything taht is needed for a program + how to start it

- why kubernetes
  - what is kubernetes
    - Kubernetes is a tool for runing a bunch of different containers
    - we gitve some configuration to decribe how we want our containers to run and interact with each other
  - concepts
    - master: a program to manage everything in the cluster
