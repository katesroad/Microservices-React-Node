# Orchestrating Collections of Services with Kubernetes

- Install Kubernets on linux
  - [Install Kubernetes on linux](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
  - [Install kuberbetes using minikube](https://minikube.sigs.k8s.io/docs/start/)
- Whirlwind of Kubernetes
  - Terms of Kubernetes
    - Kubernetes Cluster: A collection of nodes + a master to manage them
    - Node: a virtual machine that will run our containers
    - Pod: More or less a running container. Technically, a pod can run multiple containers
    - Deployment: Monitors a set of pods, make sure they are running, and restarts them if they crash
    - Services: Provides an easy to remember URL to access a running container
