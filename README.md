# Reverse Proxy and Cors 

This repository contains a set of docker-compose files which illustrate reverse proxies and some related CORS issues, along with their solutions.

It should be consumed in the following order.

1. simpleReverseProxy
2. corsProblemReverseProxy
3. corsSolutionReverseProxy
4. corsSolutionWithProxy

The repository is supported by two simple services HelloService and GoodbyeService, these are spring boot applications and not essential to the content. They are built as java 17 maven projects. Building these is left as an exercise to the reader. 

## Run Commands 

To run the example server associated with corsSolutionWithProxy use 

```
ng serve --proxy-config=src/proxy.conf.json -c=dev
```
