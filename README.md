# argocd-hello-extension

A "hello-world" Argo CD extension.

## Prerequisites

- Argo CD version 2.6+

## Quick Start

## Install UI extension

The UI extension needs to be installed by mounting the React component
in Argo CD API server. This process can be automated by using the
[argocd-extension-installer][1]. This installation method will run an
init container that will download, extract and place the file in the
correct location.

The yaml file below is an example of how to define a kustomize patch
to install this UI extension:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: argocd-server
spec:
  template:
    spec:
      initContainers:
        - name: hello-extension
          image: quay.io/argoprojlabs/argocd-extension-installer:v0.0.1
          env:
          - name: EXTENSION_URL
            value: https://github.com/jsolana/argocd-hello-extension/releases/download/v0.0.1/extension.tar
          volumeMounts:
            - name: extensions
              mountPath: /tmp/extensions/
          securityContext:
            runAsUser: 1000
            allowPrivilegeEscalation: false
      containers:
        - name: argocd-server
          volumeMounts:
            - name: extensions
              mountPath: /tmp/extensions/
      volumes:
        - name: extensions
          emptyDir: {}
```

### Install extension locally using kind

Install Arco CD in a k8s cluster locally using `kind`

```bash
    brew install kind
    kind create cluster
    kubectl create namespace argocd
    kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/v2.10.0-rc1/manifests/install.yaml

    kubectl port-forward svc/argocd-server -n argocd 8080:443
    kubectl get secret argocd-initial-admin-secret -n argocd -o yaml

```

[1]: https://github.com/argoproj-labs/argocd-extension-installer
