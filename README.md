# berry-street

Basic getting going instructions

## front end
 
1. open `cmd` window in frontend folder
2. run `npm install`
3. run `node node_modules\webpack\bin\webpack.js --watch`
4. run `node node_modules\webpack\bin\webpack-dev-server.js`
5. open browser navigate to `http://localhost:8080/index.htm`

## Using Docker

There is a docker-compose file to spin up all services and get them talking together.

You need a running docker host to use, for OSX / Windows use Docker Toolbox: https://www.docker.com/products/docker-toolbox

Test that docker is running:

```
$ docker info
```

You then need to download all the docker images used and build the images for the API and frontend:

```
$ docker-compose build
```

The first time, this will download half the internet so it will take a while.

To then start all the services:

```
$ docker-compose up
```

The services will be listening as follows:

* API: http://\[docker-host-ip\]:8081/
* Frontend: http://\[docker-host-ip\]:8080/
* Mysql: \[docker-host-ip\]:3306
* Neo4j: http://\[docker-host-ip\]:7474/

To get your docker host IP:

```
docker-machine env default|grep HOST
```
