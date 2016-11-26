#!/bin/bash

# Really non-robust deploy script
# Will start frontend on port 80, API on 8080
# and neo4j on 7474

# This can be run from cron. If it detects changes on the prod branch
# then it will merge and run them
#
# To deploy code from github, open a pull request from master to prod
# Merge the pull and wait up to 5 mins

set -e

BRANCH=prod
if [ "$1" = "--force" ] ; then
	DEPLOY=true
else
	DEPLOY=false
fi

cd ~/berry-street
git fetch origin $BRANCH
if [ "$(git rev-parse HEAD)" = "$(git rev-parse FETCH_HEAD)" ] ; then
	echo "No changes detected"
else
	echo "Deploying changes"
	git log --reverse --no-merges --stat HEAD..FETCH_HEAD
	git merge FETCH_HEAD
	DEPLOY=true
fi

if [ "$DEPLOY" = "true" ] ; then
	docker-compose build
	docker-compose down --remove-orphans
	docker-compose up -d
fi

