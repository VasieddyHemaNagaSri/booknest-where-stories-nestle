// const mongoose = require("mongoose");
// // Middleware
// const MONGO_URI = 'mongodb+srv://elf:elf123@myprojects.inzgx1q.mongodb.net/BookStore?retryWrites=true&w=majority'
// // Connect to MongoDB using the connection string
// mongoose.connect(MONGO_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// }).then(() => {
//   console.log(`Connection successful`);
// }).catch((e) => {
//   console.log(`No connection: ${e}`);
// });

// // mongodb://localhost:27017 



const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vasireddyhemanagasri:SHkeyIvrebzSny3A@cluster0.kvqwgud.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
