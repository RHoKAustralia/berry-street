# Berry Street Family Finder

## Basic setup instructions

The quickest way to get the application up and running on your local machine is using [Docker](https://www.docker.com/products/overview)

Once you have Docker installed,

- Go to the rood directory of the project and run

  ```
  $ docker-compose build
  ```

  this will create all the containers for the application.

  *Note. This is going to take a while to complete. The good news is it's only when done for the first time.*

- Now that everything is installed, run

  ```
  $ docker-compose up
  ```

- Go to

  ```
  http://localhost
  ```

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
  frontend$ npm run build
  frontend$ npm run watch:dev
  ```

- Go to

  ```
  http://localhost
  ```
