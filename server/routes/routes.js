const express = require("express");
const route = express.Router();
//const app=express()


const controller = require("../controller/controller");
const service = require("../services/render");
//app.use(express.json())

 //route.get("/", service.homepage);

//route.get("/add-user", service.adduser);

 //route.get("/update-user", service.updateuser);

//route.post("/", controller.create);


route.post("/manager", controller.createmanager);
route.post("/employee", controller.create_employee);

route.put("/update/:employee_name",controller.updateuser)
route.delete("/delete/:employee_name",controller.delete_employee)

route.get("/all", controller.getall);
route.get("/single/:singleUser",controller.getoneuser)




// route.get("/:name", controller.find);
// route.get("/",controller.allusers)
// route.put("/:id", controller.update);
// route.delete("/:id", controller.delete);

//module.exports = route;

module.exports = route;
