# ORM-E-Commerce-Back-End

TODOS:
* Finalize README
* Record Video of App and Add to README
- run schema
- seed db
- start app
- demonstrate all routes in insomnia
* 

## Table of Contents

[Description](#description)
<br>
[Technologies Used](#technologies-used)
<br>
[Installation](#installation)
<br>
[Usage](#usage)
<br>
[Credits](#credits)

## Description

The purpose of the application is to serve as a back end for an e-commerce website. This application can be used to create and seed a development database with test data, and then utilizes API GET, POST, PUT, and DELETE routes to successfully retreive, create, update, and delete data in the database. All of this functionality can be tested using Insomnia.

The following video demonstrates the applications functionality: [E-Commerce Back End](insert google drive link here)

## Technologies Used

* JavaScript
* Node.js
* Express.js
* Sequelize
* Environmental Variables (dotenv)
* MySQL Database

## Installation

* Install the application by cloning this repository to your local machine.
* Run ```npm i``` to install dependencies needed for this application

## Usage
* Create the employee database by opening terminal running the schema.sql file using command:
```mysql -uroot < db/schema.sql```
* Seed the database by opening terminal running the seeds/index.js file using command:
```node seeds/```
* Run the application by opening terminal and using command: 
```node server.js```
* All routes can be tested using Insomnia

## Credits

* Starter code provided by edX Boot Camps LLC.
* All updates made by Conner Martin aka Conartisttt