# ATM Account Manager Application

This is a small project to demonstrate CRUD (Create, Read, Update, Delete) functionality on accounts in an ATM machine.
It has two modules:
- the backend (atm) which provides all the APIs for creating, reading, updating and deleting the accounts.
- the front-end (atm-manager-ui) which calls the APIs exposed by the backend and renders the UI components on the web browser.
The backend is developed using Spring-Boot, JPA and MySQL database.
The front-end is developed using React-Redux.
The application has been tested on Ubuntu 18.04 and Windows 10. During the installation phase (described below), select the appropriate installers for your system.


## Installation and Environment Preparation
- Install Java 11 (I have used OpenJDK, but Oracle JDK should also be fine).
- Setup JAVA_HOME environment variable with the Java 11 installation path and append %JAVA_HOME\bin% to the 'PATH' variable.
- Install Maven (I have used Apache Maven 3.6.0): [https://maven.apache.org/install.html](https://maven.apache.org/install.html)
- Append the maven bin folder (e.g. in windows C:\Program Files\apache-maven-3.6.0\bin) to the environment variable 'PATH'.
- Install Node.js (I have used node version: v14.17.4 and npm version: 6.14.14)
- Install MySQL (I have used MySQL 8, but 5.7 should also work). For windows: [https://dev.mysql.com/doc/refman/8.0/en/windows-installation.html](https://dev.mysql.com/doc/refman/8.0/en/windows-installation.html)
- Append MySQL bin folder in the system 'PATH' variable (e.g. for windows C:\Program Files\MySQL\MySQL Server 8.0\bin).

## Download the Source Code
Download source code as zip file from the current [repository](https://github.com/tnasim/atm-manager-spring-react) or clone using git:
```
https://github.com/tnasim/atm-manager-spring-react.git
```

## Run the Backend (atm)

### Configure MySQL database
Create a database named 'atmdb'. If you choose to use a different name, specify the name in the src\main\resources\application.properties file:
```
spring.datasource.url= jdbc:mysql://localhost:3306/**atmdb**?useSSL=false
spring.datasource.username= root
spring.datasource.password= root
spring.jpa.properties.hibernate.dialect= org.hibernate.dialect.MySQL5InnoDBDialect
spring.jpa.hibernate.ddl-auto= update
```

## Run the Server Application
Go to the project directory and run the following commands:
```
$ cd /path/to/project/atm
$ mvn spring-boot:run
```
This will run the server on port 8080 in your localhost.
In order to test this, you can use tools like [Postman](https://www.postman.com/).

## API Endpoints and Sample Requests
The APIs can be tested using a REST API client like Postman.

### Create an Account
- URL: http://localhost:8080/api/accounts
- Method: POST
- Sample Request Body (raw-JSON):
```
{
    "name": "Account 1",
    "address": "Tempe, Arizona 85281",
    "balance": 1.0
}
```
- Sample JSON Response:
```
{
    "id": 1,
    "number": "85979272",
    "name": "Account 1",
    "address": "Tempe, Arizona 85281",
    "balance": 1.0,
    "openingDate": "2022-05-04",
    "active": false
}
```

### Retreive ALL Accounts
URL: http://localhost:8080/api/accounts
Method: GET
Sample Request Body: None
Sample Response:
```
[
    {
        "id": 1,
        "number": "85979272",
        "name": "Account 1",
        "address": "Tempe, Arizona 85281",
        "balance": 1.0,
        "openingDate": "2022-05-04",
        "active": false
    },
    ...
]
```

### Retreive Account by ID
URL: http://localhost:8080/api/accounts/{ID}
Method: GET
Sample Request Body: None
Sample Response:
```
[
    {
        "id": 1,
        "number": "85979272",
        "name": "Account 1",
        "address": "Tempe, Arizona 85281",
        "balance": 1.0,
        "openingDate": "2022-05-04",
        "active": false
    },
    ...
]
```

### Update Account Information:
- URL: http://localhost:8080/api/accounts/{ID}
- Method: POST
- Sample Request Body (raw-JSON):
```
{
    "name": "Account 1",
    "address": "Tempe, Arizona 85281",
    "balance": 11.0
}
```
- Sample JSON Response:
```
{
    "id": 1,
    "number": "85979272",
    "name": "Account 1",
    "address": "Tempe, Arizona 85281",
    "balance": 11.0,
    "openingDate": "2022-05-04",
    "active": false
}
```

## Running the UI (atm-manager-ui)
Run the following commands on the command line:
```
$ cd /path/to/atm-manager-ui
$ npm install
$ npm start
```
This will start the application and you can access it from the browser at the following URL: [http://localhost:8081](http://localhost:8081)
