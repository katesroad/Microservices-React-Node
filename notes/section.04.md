# Orchestrating Collections of Services with Kubernetes

- Install Kubernets on linux

  - [Install Kubernetes on linux](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
  - [Install kuberbetes using minikube](https://minikube.sigs.k8s.io/docs/start/)
    - minikube is local Kubernetes, focusing on making it easy to learn and develop for Kubernetes.

- Whirlwind of Kubernetes
  - Terms of Kubernetes
    - Kubernetes Cluster: A collection of nodes + a master to manage them
    - Node: a virtual machine that will run our containers
    - Pod: More or less a running container. Technically, a pod can run multiple containers
    - Deployment: Monitors a set of pods, make sure they are running, and restarts them if they crash
    - Service : Provides an easy to remember URL to access a running container
    - Config file
      - run x copies of pods
      - Please allow copies of posts to be accessiable from network
- Introduction to [deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
  - Manage the containers inside a Pod
  - To switch the new version of pod