# ORM-E-Commerce-Back-End

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

The following video demonstrates the applications functionality: [E-Commerce Back End](https://drive.google.com/file/d/1IyE_cloTKOmbOtA8Ht0EUULrbMbo0T9x/view)
[Uploading E-Commerce Back End.webm…]()


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
* A .env file will need to be created with the following information to connect to database:

DB_NAME=```'name_of_database || ecommerce_db'```
<br>
DB_USER=```'name_of_user || root'```
<br>
DB_PASSWORD=```'db_password || ""'```


## Usage

* Create the employee database by opening terminal running the schema.sql file using command:
```mysql -uroot < db/schema.sql```
* Seed the database by opening terminal running the seeds/index.js file using command:
```node seeds/```
* Run the application by opening terminal and using command: 
```node server.js```
* All routes can be tested using Insomnia

Product Routes:
* Get all products: GET: http://localhost:3001/api/products
* Get a product by ID: GET: http://localhost:3001/api/products/
```id```
* Add a new product: POST: http://localhost:3001/api/products
<br>
POST example:
<br>

```
{
	"product_name": "Basketball",
	"price": "200.00",
	"stock": "3",
	"tagIds": [1, 2, 3, 4]
}
```

* Update a product by ID: PUT: http://localhost:3001/api/products/
```id```
<br>
PUT example:
<br>

```
{
	"product_name": "Soccer",
	"price": "100.00",
	"stock": "2",
	"tagIds": [1, 4]
}
```

* Delete a product by ID: DELETE: http://localhost:3001/api/products/
```id```

Tag Routes:
* Get all tags: GET: http://localhost:3001/api/tags
* Get a tag by ID: GET: http://localhost:3001/api/tags/
```id```
* Add a new tag: POST: http://localhost:3001/api/tags
<br>
POST example:
<br>

```
{
	"tag_name": "silver",
}
```

* Update a tag by ID: PUT: http://localhost:3001/api/tags/
```id```
<br>
PUT example:
<br>

```
{
	"tag_name": "platnum",
}
```

* Delete a tag by ID: DELETE: http://localhost:3001/api/tags/
```id```

Category Routes:
* Get all categories: GET: http://localhost:3001/api/categories
* Get a category by ID: GET: http://localhost:3001/api/categories/
```id```
* Add a new category: POST: http://localhost:3001/api/categories
<br>
POST example:
<br>

```
{
	"category_name": "Underwear",
}
```

* Update a category by ID: PUT: http://localhost:3001/api/categories/
```id```
<br>
PUT example:
<br>

```
{
	"category_name": "Undergarments",
}
```

* Delete a category by ID: DELETE: http://localhost:3001/api/categories/
```id```
 

## Credits

* Starter code provided by edX Boot Camps LLC.
* All updates made by Conner Martin aka Conartisttt
