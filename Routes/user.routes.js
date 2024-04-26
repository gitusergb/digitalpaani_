const express = require('express');
const { getUser,registerUser,loginUser,logoutUser,borrowbook,getProfile,borrow_books,returnb} = require('../Controller/userController');
 const {auth} = require('../Middleware/auth.middleware');

const userRouter = express.Router();

// /**
//   * @swagger
//   * components:
//   *   schemas:
//   *         User:
//   *             type:object
//   *             properties:
//   *                     id:
//   *                         type: object
//   *                         description: The auto-generated id of the user
//   *                     username:
//   *                         type: string
//   *                         description: The user name
//   *                     email:
//   *                         type: string
//   *                         description: Age of the user
//   *                     password:
//   *                         type: string
//   *                         description: The user city
//   *                     role:
//   *                         type: string
//   *                         description: user role
//   */

//  /**
//   * @swagger
//   * tags:
//   *  name: User
//   *  description: All the API routes related to User
//   */
 

//  /**
//   * @swagger
//   * /users:
//   *  get:
//   *      summary: This will get all the user data from the database
//   *      tags: [user]
//   *      responses:
//   *          200:
//   *               description: The list of all the users
//   *               content:
//   *                   application/json:
//   *                       schema:
//   *                           type: array
//   *                           item:
//   *                               $ref: "#/components/schemas/User"
//   *
//   */


// /**
// * @swagger
// * /users/register:
// *   post:
// *         summary: To post the details of a new user
// *         tags: [User]
// *         requestBody:
// *            required: true
// *            content:
// *               application/json:
// *                 schema:
// *                    $"ref": '#/components/schemas/User'
// *         responses:
// *           200:
// *             description: The user was successfully registered
// *             content:
// *               application/json:
// *                 schema:
// *                   $ref: '#/components/schemas/User'
// *           500:
// *             description: Some server error
// */


/**
 * @swagger
 * /users:
 *   get:
 *     summary: This will get all the user data from the database
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     tags: [user]
*/
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/logout', auth,logoutUser);
//////////////////////////////////////////
userRouter.get('/',auth,getUser);
userRouter.post("/borrow",auth,borrowbook);
userRouter.get("/profile",auth,getProfile)
userRouter.get("/borrowed-books",auth,borrow_books);
userRouter.post("/return",returnb);
/////////////////////////////////////////


module.exports = {userRouter};
