FROM openjdk:17-oracle

ARG JAR_FILE=target/GoodbyeService-1.0-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]