const express = require('express');
const {createbook,seebook,yeargetbook,updatebook,deletebook,byauthor} = require('../Controller/bookController');
const {auth} = require('../Middleware/auth.middleware');

const bookRouter= express.Router();
//restricted
bookRouter.post('/addbook',auth, createbook);
bookRouter.get('/',seebook);
bookRouter.get('/:year',auth,yeargetbook);//get by year
bookRouter.get('/:author',auth,byauthor);//get by author
bookRouter.patch('/update/:bookID',auth,updatebook);
bookRouter.delete('/delete/:bookID',auth,deletebook);
/////////////////////////GB////////////////////////////

module.exports = {bookRouter};