#!/bin/bash

# Really non-robust deploy script
# Will start frontend on port 80, API on 8080
# and neo4j on 7474

set -e

cd ~/berry-street
git pull
docker-compose build
docker-compose down
docker-compose up -d

