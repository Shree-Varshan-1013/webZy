FROM eclipse-temurin

COPY backend/jwt/target/*.jar testapp.jar

EXPOSE 2018

ENTRYPOINT ["java", "-jar", "testapp.jar"]

