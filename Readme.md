
## DigitalPaani_BMS_BE

## Render link : 

### swagger : http://localhost:7000/apidocs/#/

## Overview
- A simple book management API using Node JS. 
- The API offer these functionalities: User authentication. 
- CRUD operations for managing book entries (e.g., title, author, publication year). 
- Filtering books by author or publication year. 
- Clear documentation of API endpoints and their usage are there. 
- Implemented basic security measures (like input validation). 


## Installation

1. Clone the repository: `git clone [https://github.com/gitusergb/digitalpaani_.git]`
2. Navigate to the project directory: `cd digitalpaani_be`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`




<details>
<summary>

  ## create
</summary>
<br>

### Register /signup  user

### admin

```
POST : http://localhost:7000/users/register

{"username":"admin",
"email":"admin@gmail.com",
"password":"admin",
"role":"admin"}

{
    "msg": "The new user has been registered",
    "registeredUser": {
        "username": "admin",
        "email": "admin@gmail.com",
        "password": "$2b$05$3gDTeKUw4qxffewPA2QDRObHsrqmFcWBFdUZSYDX7OiBDOl.PYBSC",
        "role": "admin",
        "_id": "65d351d95d8a884040fb540c",
        "createdAt": "2024-02-19T13:04:25.498Z",
        "updatedAt": "2024-02-19T13:04:25.498Z"
    }
}
```

### user
```
POST : http://localhost:7000/users/register

{"username":"user1234",
"email":"user1234@gmail.com",
"password":"user1234",
"role":"dev"}

{
    "msg": "The new user has been registered",
    "registeredUser": {
        "username": "user1234",
        "email": "user1234@gmail.com",
        "password": "$2b$05$lICAwggFsHpN7xBD3GZiUOHLcteMw1Wcut1KPCSnpN9wZaAH.gvme",
        "role": "dev",
        "_id": "65d350bc7063d7da6c413b1c",
        "createdAt": "2024-02-19T12:59:40.849Z",
        "updatedAt": "2024-02-19T12:59:40.849Z"
    }
}
```

</details>
<details>
<summary>

  ### Login 
</summary>
<br>

### admin Login 
```
POST :http://localhost:7000/users/login

{
"email":"admin@gmail.com",
"password":"admin"}

{
    "msg": "Login successful!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NWQzNTFkOTVkOGE4ODQwNDBmYjU0MGMiLCJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzA4MzQ4MzQxfQ.JEazHNCspFdguDj6axI4JYFNUiglopLvh_IcZsDqEy0"
}

```
### User Login
```
POST :http://localhost:7000/users/login

{
"email":"user1234@gmail.com",
"password":"user1234"}

{
    "msg": "Login successful!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NWQzNTBiYzcwNjNkN2RhNmM0MTNiMWMiLCJ1c2VybmFtZSI6InVzZXIxMjM0IiwiaWF0IjoxNzA4MzQ4NzE1fQ.UNtjy5l0HdpR-6CDXS_gF9d1DtoTdgc7wMIvU0JbfLw"
}

```
</details>

<details>
<summary>

  ### Book section

</summary>

```
POST : http://localhost:7000/books/addbook

{
    "title": "The Power of Now",
    "author" : "Eckhart Tolle",
   "isbn": "9781577314806",
   "description": "A guide to spiritual enlightenment and living in the present moment.",
   "publishedDate": 1997,
 "category": "Self-Help",
   "price":15.00,
   "quantity": 30
}


{
    "msg": "A new book has been Created",
    "book": {
        "title": "The Power of Now",
        "author": "Eckhart Tolle",
        "isbn": "9781577314806",
        "description": "A guide to spiritual enlightenment and living in the present moment.",
        "publishedDate": "1970-01-01T00:00:01.997Z",
        "category": "Self-Help",
        "price": 15,
        "quantity": 30,
        "borrowedBy": [],
        "priceHistory": [],
        "quantityHistory": [],
        "_id": "65d35db45f848cc4b177f7d4",
        "createdAt": "2024-02-19T13:55:00.846Z",
        "updatedAt": "2024-02-19T13:55:00.846Z"
    }
}

```
</details>

<details>
<summary>

  ## Read 

</summary>
<br>

### user section 
```
GET : http://localhost:7000/users/logout
{
    "msg": "Please Login!"
}

```

```
GET : http://localhost:7000/users/
{
    "users": [
        {
            "_id": "65cf0bfd6534c7f1bee8fc2b",
            "username": "user2",
            "email": "user2@gmail.com",
            "createdAt": "2024-02-16T07:17:17.734Z",
            "updatedAt": "2024-02-16T07:17:17.734Z"
        },
        {
            "_id": "65cf0c116534c7f1bee8fc2d",
            "username": "user3",
            "email": "user3@gmail.com",
            "createdAt": "2024-02-16T07:17:37.233Z",
            "updatedAt": "2024-02-16T07:17:37.233Z"
        },
        {
            "_id": "65cf0c1f6534c7f1bee8fc2f",
            "username": "user1",
            "email": "user1@gmail.com",
            "createdAt": "2024-02-16T07:17:51.366Z",
            "updatedAt": "2024-02-16T07:17:51.366Z"
        }
    ]
}

```
### Book section
```
GET : http://localhost:7000/books/

{
    "books": [
        {
            "_id": "65d35ecd5f848cc4b177f7d7",
            "title": "The Raven",
            "author": "Edgar Allan Poe",
            "isbn": "9780486277955",
            "description": " A collection of poems, including the famous narrative poem The Raven.",
            "publishedDate": "1970-01-01T00:00:01.845Z",
            "category": "Poetry",
            "price": 4.99,
            "quantity": 20,
            "borrowedBy": [],
            "priceHistory": [],
            "quantityHistory": [],
            "createdAt": "2024-02-19T13:59:41.830Z",
            "updatedAt": "2024-02-19T13:59:41.830Z",
            "availableQuantity": 20
        },
        {
            "_id": "65d35f165f848cc4b177f7da",
            "title": "Hamlet",
            "author": "William Shakespeare",
            "isbn": "9780143128540",
            "description": "Tragedy about the Prince of Denmark and his quest for revenge.",
            "publishedDate": "1970-01-01T00:00:01.603Z",
            "category": "Drama",
            "price": 9.99,
            "quantity": 60,
            "borrowedBy": [],
            "priceHistory": [],
            "quantityHistory": [],
            "createdAt": "2024-02-19T14:00:54.672Z",
            "updatedAt": "2024-02-19T14:00:54.672Z",
            "availableQuantity": 60
        }
        ]
}
```

```
GET : http://localhost:7000/books/:year
params : year : 1970-01-01T00:00:01.603Z
{
    "msg": "book with year:1970-01-01T00:00:01.603Z",
    "book": {
        "_id": "65d35f165f848cc4b177f7da",
        "title": "Hamlet",
        "author": "William Shakespeare",
        "isbn": "9780143128540",
        "description": "Tragedy about the Prince of Denmark and his quest for revenge.",
        "publishedDate": "1970-01-01T00:00:01.603Z",
        "category": "Drama",
        "price": 9.99,
        "quantity": 60,
        "borrowedBy": [],
        "priceHistory": [],
        "quantityHistory": [],
        "createdAt": "2024-02-19T14:00:54.672Z",
        "updatedAt": "2024-02-19T14:00:54.672Z",
        "availableQuantity": 60
    }
}
```
```
http://localhost:7000/books/:author

J.K. Rowling

{
    "book": {
        "_id": "65d361a95f848cc4b177f7ec",
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "isbn": "9780590353427",
        "description": "The magical journey begins as Harry Potter, an orphaned boy, discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry.",
        "publishedDate": "1970-01-01T00:00:01.997Z",
        "category": "Fantasy",
        "price": 10.99,
        "quantity": 15,
        "borrowedBy": [],
        "priceHistory": [],
        "quantityHistory": [],
        "createdAt": "2024-02-19T14:11:53.289Z",
        "updatedAt": "2024-02-19T14:11:53.289Z",
        "availableQuantity": 15
    }
}

```
</details>

<details>
<summary>

 ## Update 
</summary>
<br>

### user section 
### Book section
</details>

<details>
<summary>

 ## Delete
</summary>
<br>

### user section 
### Book section
```
DELETE : http://localhost:7000/books/delete/:bookID
{
    "msg": "book with Id:65d37f0c976ae3be7c354d00 has been deleted"
}
```
</details>

---

## Contributor: [Gauri Bidwai](https://github.com/gitusergb)

## Thank You!