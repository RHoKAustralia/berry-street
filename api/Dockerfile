FROM openjdk:8

RUN mkdir /app
WORKDIR /app
COPY . /app
RUN ./gradlew build jar

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app/build/libs/berry-api-0.0.0.jar"]
