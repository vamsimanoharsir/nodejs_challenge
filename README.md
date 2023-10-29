Node.js Backend Challenge
Objective: Develop a RESTful API using Node.js for managing books.

This is a README file that documents all the things this webapp does.
I have used Node.js to build this scalable web app. There is no front end to this
I used postman app to send post requests, I assume the tester uses postman for validating this

I have committed this to my GitHub account. Clone the project using the command - git clone Url
I have used node version 18.6.0. Kindly use the same
This project runs on 8080 port number. Kindly open the browser and hit http://localhost:8080
rest all the end points follow was - http://localhost:8080/api/tutorials

I have used mongodb for storing the data. Connection is in config folder
db name - crud
collection name - tutorials
command to start the app - node server.js

Routes explanation:
five routes were configured as asked in the question

1. Add a new book (title, author, summary)
post call - http://localhost:8080/api/tutorials, send the three required params

2. View a list of all books
get call - http://localhost:8080/api/tutorials

3. View details of a specific book by its ID
get call - http://localhost:8080/api/tutorials/:id

4. Update a book's details based on id
put call - http://localhost:8080/api/tutorials/:id

5. Delete a book
delete call - http://localhost:8080/api/tutorials/:id

6. All the test cases for view, update, delete if a book is not present is also completed
we will get the related error when we try to perform on books that are not present

//done by:
srivamsimanoharkomma@gmail.com
9398953620
