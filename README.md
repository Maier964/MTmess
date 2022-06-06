# MTMESS 
## Overview

~~~sql
~ Web message application made with Spring, ReactJS and PostgreSQL.
The users are able to register, log in, add friends and send messages trough websockets. 
~~~



<img style="border:1px solid black"
     src="https://user-images.githubusercontent.com/71098304/172190269-79f64853-b68d-4ff8-9d98-00681b9689b6.png" width=184 height=301>

## Technologies

- Spring Boot :leaves:
    - Maven
      - Build automation tool to aid in solving the package dependencies and control the compile flow of the program.
    - JPA
      - Used to create a responsive database API based on the persistence framework
    - SockJS Websocket
      - Wrapper for the basic chat functionalities, using sockets. Message routing was handled by a built-in broker. 
- PostgresSQL :elephant:
  - Used to create and manage a relational database. The database keeps the messages, the users and the friends of each user, in order to persist the data upon closing the application.
  
- ReactJS :electron:
  - The front-end of the project was created in ReactJS, using functional components, state variables and conditional rendering. 


## Using the repository

~~~bash
# To clone the repository, simply use
    git clone https://github.com/Maier964/MTmess.git

# To start the back-end, go to the root project directory and use maven
    mvn spring::boot run

# To start the front-end component, go to "/frontend" and use the NodeJs packet manager
    npm start

# You should see your app running on localhost, port 3000
~~~


## For more information, please check the "EXTENDED_README" file.
