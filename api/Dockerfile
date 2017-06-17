FROM openjdk:8

RUN mkdir /app
WORKDIR /app
COPY . /app
# If you are using Windows (like the author of this comment), you'll be copying files with CRLF endings
# instead of LF endings (if you were working on a Linux or OSX environment), these steps will install the
# dos2unix utility and fix up the line endings of the content we just copied into it
#
# TODO: Find a way to make these next 3 steps below only required for devs on a Windows host.
RUN apt-get -y update && apt-get install -y dos2unix
RUN find . -type f -print0 | xargs -0 dos2unix
RUN chmod +x ./gradlew
RUN ./gradlew build jar

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app/build/libs/berry-api-0.0.0.jar"]
