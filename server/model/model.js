// const mongoose = require("mongoose");

// var schema = new mongoose.schema({
//   name: {
//     type: String,
//     require: true,
//   },
//   email: {
//     type: String,
//     require: true,
//     unique: true,
//   },
//   gender: {
//     type: String,
//   },
//   status: {
//     type: String,
//   },
// });

// const userdb = mongoose.model("userdb", schema);
// module.exports = userdb;

const mongoose = require("mongoose");

var schema = new mongoose.Schema({
   name : {
    type: String,
    required: [true, 'please provide NAME'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
    unique: true,
  },
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  // gender: String,
  // status: String,
  manager: {


    type: String,
    required: [true, 'must provide manager name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
    


  },
  employees:Array,
  lastname:{
    type:String,
    required: [true, 'must provide lastname']

  },

  info: String,

    

  


  
  ismanager:{
    type: Boolean,
    default: true,
  },

  
  
  
});

const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;
