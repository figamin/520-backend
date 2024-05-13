# Restaraunt Reservation System

## Introduction
We have created a restaurant reservation system in which customers can visit the website to reserve a table depending on what times are available at the restaurant. Users can enter their name, email, and the amount of people they have in their party. Additionally, they will have the option to cancel a reservation, in which case a spot will open up for other customers to reserve a spot. 

The purpose of the project is to streamline the process of making restaurant reservations by providing customers with a user-friendly online platform. The goal is to enhance the customer experience and optimize table management for the restaurant.


## Installation Instructions

1. First it is necessary to ensure you have npm installed so that all the required dependencies are present in the project. If you do not, enter the command “npm install” in your terminal. 
2. Once dependencies are installed, you can start the local server by running “npm start”.  This command will start the server and serve the project on a specified port, which in this case is port 3000.
3. To access the project in the browser, open your web browser and navigate to the URL “http://localhost:3000”.
4. Once it is opened, you can perform actions such as making a reservation, canceling it, and checking the waitlist feature to ensure everything works as expected. 


### Configuration
It is important to note that when npm installed, there will be a package-lock.json file that is automatically generated. This file should not be modified manually as it is used to ensure reproducible builds by locking down dependency versions. Additionally, there will be a node_modules folder created that contains valuable files such as env.js and settings. These files are necessary to ensure the API used in the project are called correctly, and no issues come up if the environment variables or settings are modified. 
