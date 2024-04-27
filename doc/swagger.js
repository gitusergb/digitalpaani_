
const swaggerJSdoc=require("swagger-jsdoc")


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
//   app.use('/apidocs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));