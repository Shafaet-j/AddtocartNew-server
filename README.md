# assignment server-L2

Server Live Link

### https://user-crud-pi.vercel.app/

## Run the server application locally

If you want to run the server on your computer, firstly clone this project and then run `npm install` and then run the command `npm run build` in another terminal to convert the TypeScript code to JavaScript code. And start the server with `npm run start:dev` command.

## Server Documentation

- This server is created to manage users and their orders.
- New users are created here, and all users in the database can be seen.
- Also, any user can be retrieved with a specific ID.
- In this, the user can be deleted and updated.
- Here you can add the orders of that user with the ID of a user, view the orders and see the total price.

## Server API

### 1. Create a new user

Endpoint: POST `/api/users`

### 2. Retrieve a list of all users

Endpoint: GET `/api/users`

### 3. Retrieve a specific user by ID

Endpoint: GET `/api/users/:userId`

### 4. Update user information

Endpoint: PUT `/api/users/:userId`

### 5. Delete a user

Endpoint: DELETE `/api/users/:userId`

### 6. Add New Product of Order in user

Endpoint: PUT `/api/users/:userId/orders`

### 7. Retrieve all orders for a specific user

Endpoint: GET `/api/users/:userId/orders`

### 8. Calculate Total Price of Orders for a Specific User

Endpoint: GET `/api/users/:userId/orders/total-price`
