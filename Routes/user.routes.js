const express = require('express');
const { getUser,registerUser,loginUser,logoutUser,borrowbook,getProfile,borrow_books,returnb} = require('../Controller/userController');
 const {auth} = require('../Middleware/auth.middleware');

const userRouter = express.Router();

/** POST Methods */
    /**
     *  @swagger
     * '/users/register':
     *  post:
     *     tags:
     *     - User Controller
     *     summary: Create a user
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - username
     *              - email
     *              - password
     *              - role
     *            properties:
     *              username:
     *                type: string
     *                default: Gauri
     *              email:
     *                type: string
     *                default: gauri@gmail.com
     *              password:
     *                type: string
     *                default: gauri123!@
     *              role:
     *                type: string
     *                default: student
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */

userRouter.post('/register', registerUser);


/**
     * @swagger
     * '/users/login':
     *  post:
     *     tags:
     *     - User Controller
     *     summary: Login as a user
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - username
     *              - password
     *            properties:
     *              username:
     *                type: string
     *                default: gauri@gmail.com
     *              password:
     *                type: string
     *                default: gauri123!@
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
userRouter.post('/login', loginUser);

userRouter.get('/logout', auth,logoutUser);
//////////////////////////////////////////

/** GET Methods */
    /**
     * @swagger
     * '/users/':
     *  get:
     *     tags:
     *     - User Controller
     *     summary: Get all users 
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
userRouter.get('/',auth,getUser);

userRouter.post("/borrow",auth,borrowbook);

userRouter.get("/profile",auth,getProfile)

userRouter.get("/borrowed-books",auth,borrow_books);

userRouter.post("/return",returnb);
/////////////////////////////////////////


module.exports = {userRouter};
