const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {BookM}= require('../Models/book.model');


//post/create
const createbook = async (req, res) => {

  try {
    const book = await BookM.findOne({ isbn: req.body.isbn })
    if (book != null) {
      return res.status(400).json({ error: "Book with same ISBN already found" })
    }
    const newBook = await BookM.create(req.body)
    return res.status(200).json({  msg:'A new book has been Created',book: newBook })
  } catch (err) {
    res.status(400).json({ error: err.message });
    next(err)
  }

};


//get
const seebook =async( req ,res)=>{
//     try {
//           const books = await BookM.find({userID:req.body.userID})
//           console.log(books)
//     return res.status(200).send({
//       books: books.map((book) => ({
//         ...book.toJSON(),
//         availableQuantity: book.quantity - book.borrowedBy.length,
//       })),
//     })
//   }catch (err) {
//    res.status(400).send({ error: err.message });
//  }

const { userID, page = 1, limit = 10 } = req.body; // Default page = 1, limit = 10

try {
  const options = {
    skip: (page - 1) * limit,
    limit: limit
  };

  const books = await BookM.find({ userID: userID }, {}, options);
  
  const totalBooks = await BookM.countDocuments({ userID: userID }); // Total number of books matching the query

  return res.status(200).send({
    books: books.map((book) => ({
      ...book.toJSON(),
      availableQuantity: book.quantity - book.borrowedBy.length,
    })),
    totalPages: Math.ceil(totalBooks / limit), // Total number of pages
    currentPage: page // Current page
  });
} catch (err) {
  res.status(400).send({ error: err.message });
} 


}
//get book by 
//author 
const byauthor =async (req, res, next) => {
  //console.log(req.params)
  const bookauthor=req.params.author
 // console.log(bookauthor)
  try {
    const book = await BookM.findOne({author:bookauthor})
    if (book == null) {
      return res.status(404).send({ error: `No book found with author name: ${bookauthor}` })
    }
    console.log(book)
    return res.status(200).send({
      book: {
        ...book.toJSON(),
        // ...book,
        availableQuantity: book.quantity - book.borrowedBy.length,
      },
    })
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
}

//get_book_ publication year. 
const yeargetbook =async(req,res,next)=>{
  //console.log(req.params.year)
  const bookD=req.params.year;
   console.log(bookD)
    try { 
       
        const book = await BookM.findOne({publishedDate:bookD})
           // res.status(200).send({ msg:`book with year:${bookyear}: ${book}`});
           if (book == null) {
            return res.status(404).send({ error: `No book found with publication Year/date : ${bookD}` })
          }
           console.log(book)
          return res.status(200).send({
            msg:`book with Id:${bookD}`,
            book: {
              ...book.toJSON(),
              // ...book,
              availableQuantity: book.quantity - book.borrowedBy.length,
            },
          })
        } catch (error) {
          res.status(400).send({ error: error.message });
        }

}

//update/patch by id: update option 
const updatebook =async(req ,res)=>{
const {bookID}=req.params
    try { 
        const book = await BookM.findOne({_id:bookID})
        if(req.body.username==="admin"){
       await BookM.findByIdAndUpdate({_id:bookID},req.body)
       res.status(200).send({ msg:`book with Id:${bookID} has been updated`});}
       else{
        res.status(400).send({ msg:`You are not Authorised`});}
       
          } catch (error) {
            res.status(400).send({ error: error.message });
          }

}


//delete
const deletebook =async(req ,res)=>{
    const {bookID}=req.params
        try { 
            const book = await BookM.findOne({_id:bookID})
            if(req.body.username==="admin"){
           await BookM.findByIdAndDelete({_id:bookID})
           res.status(200).send({ msg:`book with Id:${bookID} has been deleted`});}
           else{
            res.status(400).send({ msg:`You are not Authorised`});}
           
              } catch (error) {
                res.status(400).send({ error: error.message });
              }
    
    }

module.exports = {createbook,seebook,yeargetbook,updatebook,deletebook,byauthor};