FROM java:8-jdk

COPY . /usr/src/app

RUN cd /usr/src/app && ./gradlew build jar

ENTRYPOINT cd /usr/src/app && java -jar build/libs/berry-api-*.jar

