const express = require('express');
const {createbook,seebook,yeargetbook,updatebook,deletebook,byauthor} = require('../Controller/bookController');
const {auth} = require('../Middleware/auth.middleware');

const bookRouter= express.Router();
//restricted


/** POST Methods */
    /**
     * @swagger
     * '/books/addbook':
     *  post:
     *     tags:
     *     - book Controller
     *     summary: Create a book
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - title
     *              - author
     *              - isbn
     *              - description
     *              - publishedDate
     *              - category
     *              - price
     *              - quantity
     *            properties:
     *              title:
     *                type: string
     *                default: The Power of Now2
     *              author:
     *                type: string
     *                default: person
     *              isbn:
     *                type: string
     *                default: 12345
     *              description:
     *                type: string
     *                default: book
     *              publishedDate:
     *                type: date
     *                default: 1997
     *              category:
     *                type: string
     *                default: Self-Help
     *              price:
     *                type: number
     *                default: 15
     *              quantity:
     *                type: number
     *                default: 16
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
bookRouter.post('/addbook',auth, createbook);


/** GET Methods */
    /**
     * @swagger
     * '/books/':
     *  get:
     *     tags:
     *     - book Controller
     *     summary: Get all books
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

bookRouter.get('/',seebook);

/** GET Method by year*/
    /**
     * @swagger
     * '/books/{year}':
     *  get:
     *     tags:
     *     - book Controller
     *     summary: Get a book by year
     *     parameters:
     *      - name: year
     *        in: path
     *        description: The year of the book
     *        required: true
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

bookRouter.get('/:year',auth,yeargetbook);//get by year

/** GET Method by author*/
    /**
     * @swagger
     * '/books/{author}':
     *  get:
     *     tags:
     *     - book Controller
     *     summary: Get a book by author name
     *     parameters:
     *      - name: author
     *        in: path
     *        description: The author of the book
     *        required: true
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

bookRouter.get('/:author',auth,byauthor);//get by author


/** PATCH Method */
    /**
     * @swagger
     * '/books/update/{bookID}':
     *  patch:
     *     tags:
     *     - book Controller
     *     summary: Modify a book
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - bookId
     *            properties:
     *              bookId:
     *                type: string
     *                default: ''
     *              title:
     *                type: string
     *                default: ''
     *              author:
     *                type: string
     *                default: ''
     *     responses:
     *      200:
     *        description: Modified
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */

bookRouter.patch('/update/:bookID',auth,updatebook);

/** DELETE Methods */
    /**
     * @swagger
     * '/books/delete/{bookId}':
     *  delete:
     *     tags:
     *     - book Controller
     *     summary: Delete book by Id
     *     parameters:
     *      - name: bookId
     *        in: path
     *        description: The unique Id of the book
     *        required: true
     *     responses:
     *      200:
     *        description: Removed
     *      400:
     *        description: Bad request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
bookRouter.delete('/delete/:bookID',auth,deletebook);
/////////////////////////GB////////////////////////////

module.exports = {bookRouter};