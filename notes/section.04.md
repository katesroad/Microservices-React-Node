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

- [Pod](https://kubernetes.io/docs/concepts/workloads/pods/):Pods are the smallest deployable units of computing that you can create and manage in Kubernetes. A Pod (as in a pod of whales or pea pod) is a group of one or

  - commands with Pod
    | command | opeation|
    | ----------- | ----------- |
    | kubecetl exec -it posts sh |go inside the pod container|
    |kubectl log posts| show logs|
    | kubcetl delete posts | delete pod|
    | kubectl apply -f conf file| start the pod|
    |kubectl describe pod posts |get pod's inforamation|more containers is a group. <br>

  Usually, we don't create pods. we create deployment

- Introduction to [deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)

  - why and what is pod
    - Manage the containers inside a Pod
    - To switch the new version of image(CI/CD)
    - manage a group of pods
  - updating pod
    - #1 Build new images and update the k8s config file. Then run apply configure file again
      - created => configured
      - Every change may bring error, it would be great to tell kubernets always to use the latest version of images
    - #2
      - register docker and login in your docker from your local terminal
      - rebuild latest image
      - push image to docker hub
      ```sh
      docker push dockeraccount/repo:tag
      ```
      - rollout the deployment
      ```sh
      kubectl rollout restart deployment [name]
      ```
  - [assign pods to node](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/) <br>
    You can constrain a Pod so that it can only run on particular set of Node(s).

- [networking service](https://kubernetes.io/docs/concepts/services-networking/service/) <br>
  Services provide networking between pods

  - types of services
    - Cluster IP: Setup an easy to remember URL to access a pod, only expose pods in the cluster(**Internal**)
    - Node Port: Make a pod accessible outside of the cluster. usually, only used for dev purpose
    - Load balancer: Make a pod accessibale from outside of the cluster. This is the right way to expose a pod t othe outside world
    - External Name: Redirects an in-cluster request to a CNAME url

- colocated deployment with service in a deployment yaml file

- React app want to access endpoint to multiple services

  - Problem and solutions
    - NodePort port value is generated randomly
    - route the request to a specified port
  - Terms
    - Load Balancer Service <br>
      Tells K8s to reach out to its provider and provision a load balancer. Gets traffict into a single pod
    - Ingress or Ingress Controlloer <br>
      A pod with a set of routing rules to distribute traffic to other services

- Load balancer services and Ingress

  - [What is Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/#what-is-ingress)

  ```yamlapi
    Version: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: minimal-ingress
      annotations:
        nginx.ingress.kubernetes.io/rewrite-target: /
    spec:
      rules:
      - http:
          paths:
          - path: /testpath
            pathType: Prefix
            backend:
              service:
                name: test
                port:
                  number: 80
  ```

  - [ingress-nginx](https://github.com/kubernetes/ingress-nginx)

- ## Skaffold
