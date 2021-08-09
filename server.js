const express = require("express");

const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

const connectDB = require("./server/database/connection");
//const morgan = require("morgan");

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8081;
//const PORT = PORT;

//loging request
app.use(morgan("tiny"));
app.use(express.json())

// parsering the request in bodyparser

//app.use(bodyparser.urlencoded({ extended: true }));

//connecting to DB

app.use("/api/users", require("./server/routes/routes"));

//connectDB();

//set view engine

//app.set("view engine", "ejs");

//loading assets
// app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
// app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
// app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

const start = async ()=>{

  try{
      
    await connectDB();

    app.listen(PORT, () => {
      console.log(`your server is running on http://localhost:${PORT}`);
    });

  }
  catch (error){

    console.log(error)


  }

}

start()





