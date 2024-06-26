
const cors = require('cors');
require('dotenv').config();
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const swaggerUi=require("swagger-ui-express")
const swaggerJSdoc=require("swagger-jsdoc")

const {connection} = require("./connection")
const {userRouter}= require("./Routes/user.routes");
const { bookRouter } = require('./Routes/book.routes');

dotenv.config();
const app = express();
app.use(express.json())
app.use(cors())


const options = {
    definition: {
      openapi: '3.0.0',
      language: 'en-US',      // Change response language. By default is 'en-US'
      info: {
        title: 'Book Management System',
        version: '1.0.0',
        description:
        'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
      },
      servers:[
        {
            url:"http://localhost:7000",
            description: 'Development server',
        }
      ]
    },
    apis:["./routes/*.js"],// Path to the API routes in your Node.js application
  };
  
  const swaggerSpec = swaggerJSdoc(options);

// Serve Swagger documentation
app.use('/apidocs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API routes 
app.use("/users",userRouter)
app.use("/books",bookRouter)

app.use(express.static('Public'));

  const PORT = process.env.PORT || 3000;

    async function startServer() {
        try {
          await connection;
          console.log("Database connection Established");
        } catch {
          console.log("Database connection Failed");
        }
      
        app.listen(PORT,() => {
          console.log(`Server is running at http://localhost:${PORT}`);
          console.log("Server Started");
        });
      }
      
      startServer();