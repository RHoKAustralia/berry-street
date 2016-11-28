# Berry Street Family Finder

## Getting Started

You will need to get this code onto your laptop. To do this you will need a `git` client. If you are on windows, make sure you are using UNIX line endings as most of the tools will inside a linux docker container.

  ```
  git clone https://github.com/RHoKAustralia/berry-street.git
  ```

## Basic setup instructions

The quickest way to get the application up and running on your local machine is using [Docker](https://www.docker.com/products/overview)

Once you have Docker installed,

- Go to the root directory of the project and run

  ```
  $ docker-compose build
  ```

  this will create all the containers for the application.

  *Note. This is going to take a while to complete. The good news is it's only when done for the first time.*

  *Troubleshooting - Windows 7:* If you see this

  ```
  ←[91m/bin/sh: 1: ./gradlew: Permission denied
  ←[0m←[31mERROR←[0m: Service 'api' failed to build: The command '/bin/sh -c ./gradlew build jar' returned a non-zero code: 126
  ```
  
  then you can try running the api on its own, and using docker to run everything else:
  
  1. Edit `docker-compose.yml` to comment-out (#) the `api` section, and the link to it in `frontend/links`.
  2. Rerun `docker-compose build` then `docker-compose up` as below.
  3. Open a command prompt at <project root>\api. Run `gradlew bootRun` to start the api


- Now that everything is installed, run

  ```
  $ docker-compose up
  ```

- Go to

  ```
  http://localhost
  ```

  *Troubleshooting - Windows* If you see a 404, use `netstat -abno | more` to find which process is listening on port 80. (Could be Skype). Stop the offender then try again.
  **TODO** now nothing is listening on port 80, node is not listening either...
  
To stop the application, just hit `Ctrl+C`

## Back End Development / Testing

You will need to have [Java 8](https://www.java.com/en/download/) installed on your system and also groovy and gradle. [SDKMAN!](sdkman.io) is a good option to install the latter two.

- In a terminal, run

  ```
  $ docker-compose up neo4j
  ```

  This will start the neo4j container.

- In another terminal you can run

  ```
  $ cd api
  api$ ./gradlew bootRun
  ```
  to start up the backend api; And then, you can test it through its [swagger interface](http://localhost:8080) or using any other REST Client, like [Postman](https://www.getpostman.com/)

If you want to use an IDE like IntelliJ Idea (this is the preferred one) or Eclipse, you can generate the appropriate project files by running

```
api$ ./gradlew idea
api$ ./gradlew eclipse
```
and then import the project in the IDE

## Front End Development / Testing

- In a terminal, run

  ```
  $ docker-compose up api
  ```

  This will start the backend api and neo4j containers.

- In a second terminal

  ```
  $ cd frontend
  frontend$ npm install
  frontend$ npm run dev
  ```

- Go to

  ```
  http://localhost:8081
  ```

For a supercharged frontend dev experience, make sure you have these Chrome extensions installed:

 - [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
 - [Redux dev tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)


## Populating the Database with Sample Data

- Visit the Neo4j interface [http://localhost:7474/](http://localhost:7474/)
- Copy the script from [/api/src/main/resources/data.cql](/api/src/main/resources/data.cql) (ignoring line 1) paste into the console
- Click the 'Play' button to run

