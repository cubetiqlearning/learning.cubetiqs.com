#!/bin/bash -e

REGISTRY=registry.ctdn.net
NAME=learning-cubetiqs-com:latest
FRG=$REGISTRY/$NAME

echo "Starting build..."
docker build -f ./Dockerfile . -t $FRG

echo "Starting publish to $FRG"
docker push $FRG