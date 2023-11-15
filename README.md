This is a simple script to mass-generate tokens.

# GET STARTED

```npm install``` to install all neccessary dependencies
add a .env file where you add your "jwt-secret", it could be any string preferrably 256 characters and will look like this

```JWT_SECRET = "5d9e0b327c674d279771aed90ad876165d9e0b327c674d279771aed90ad87616"``` in the .env file (this is also the secret used for the example data that is currently in the ./tokens/ directory)

Adjust the variables in the script is needed. Default parameters registered in the payload are userid as an integer and role "user". Default expire date is set to 365 days. And default number of users is 2700.

And then standing in the root directory enter ```node main.js```to run the script

Use ```./reset.bash``` to remove all previously generated data.

You can check the validity of your generated JWT tokens and their payload here https://jwt.io/ 




