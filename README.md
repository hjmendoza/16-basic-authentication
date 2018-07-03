![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 16: Basic Auth - Haley Mendoza
===

## Feature Tasks

* Created an HTTP server using `express`
* Using `mongoose`, created a **User** model with the following properties and options:
  * `username` - *required and unique*
  * `email` - *required and unique*
  * `password` - *required - this must be hashed and can not stored as plain text*
* Used **express** `Router` to create a custom router for allowing users to **sign up** and **sign in**
* Use the **npm** `dotenv` module to house the following environment variables:
  * `PORT`
  * `MONGODB_URI`
  * `APP_SECRET` *(used for signing and verify tokens)*

## Server Endpoints
### `/api/signup`
* `POST` request - client should pass the username and password in the body of the request
* Server should respond with a token (generated using `jwt`). Server should respond with **400 Bad Request** to a failed request

### `/api/signin`
* `GET` request - the client should pass the username and password to the server using a `Basic:` authorization header
* Used middleware to parse the auth header for username/password. Performed some basic validation
* Server should respond with a token for authenticated users. Server should respond with **401 Unauthorized** for non-authenticated users

## To Start Application
* Clone down code
* Define port and secret in .env. 
* Install npm dependencies.
* Run application on mongo.
* Start server using `npm start`
* Use either Postman or HTTPie to register HTTP requests/CRUD operations
  * Note: Be sure to use Basic Authorization in Postman or `--auth` in HTTPie  
