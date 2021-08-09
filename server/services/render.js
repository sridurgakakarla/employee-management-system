//const { name } = require("ejs");
const { name } = require("ejs");
var Userdb = require("../model/model");


// // create and save new user
// exports.create = (req, res) => {
//   res.status(400).send({ message: "Content can not be empty!" });
//     return;
//   } // validate request
//   if (!req.body) {
//    


//   //console.log(`${req.name},${req.employees}`)
//   //console.log(req.body)
//   // new user
//   const user = new Userdb({
//     name: req.body.name,
//     // email: req.body.email,
//     // gender: req.body.gender,
//     // status: req.body.status,
//     manager: req.body.manager,
//     employees:req.body.employees,
//   });

//   // save user in the database
// //const totalemp=[]


  
//   user
//     .save(user)
//     .then((data) => {
//       // res.send(data);
//       // res.status('201').send("user added successfully");
//           console.log("main data updated")

//     })
//     .catch((err) => {
//       // res.status(500).send({
//       //   message:
//       //     err.message ||
//       //     "Some error occurred while creating a create operation",
//       // });
//       console.log("error in sending main data ")

//     });
    
//     const emp_array=[]

//     if(user.employees.length>=1)
//     {
    
//     //const emp_array=[]
    
//     for(i=0;i<user.employees.length;i++){
    
//      emp_array[i]={
    
//         "name":user.employees[i],
//         "manager":user.name,
//         "employees":[]
    
//       }
    
    
//     }
    
//     //console.log(emp_array.name)
    
//     }


//     Userdb.insertMany([emp_array,{"order":false}])
//   .then(function(){
//     //console.log("Data inserted")  // Success
//     res.status(201).send("data sucessfully inserted")
// }).catch(function(error){
//     res.status(400).send(error)
//          // Failure
// });
    


// };







// //retrieve and return all users/ retrive and return a single user
// exports.find = (req, res) => {
//  // west={req.params.name}
//  console.log(req.params.name)
//  const searchparam =req.params.name; 
 
//  console.log(`${searchparam}this should be null` )
//   if (searchparam) {
//     Userdb.find({name:searchparam})
//       .then((data) => {
//         if (!data) {
//           res.status(404).send({ message: "Not found user with id " + searchparam });
//         } else {
          
//            //const manager=data[0].manager

//           res.status(400).send( `${data[0].manager} : ${data[0].employees}`)
//         }
//       })
//       .catch((err) => {
//         res.status(500).send({ message: "Error retrieving user with id " + searchparam });
//       });
//   } else {
//     console.log("hii")
//     Userdb.find()
//       .then((user) => {
//         res.send(user);
//       })
//       .catch((err) => {
//         res.status(500).send({
//           message:
//             err.message || "Error Occurred while retriving user information",
//         });
//       });
//   }
// };






// // Update a new idetified user by user id
// exports.update = (req, res) => {
//   if (!req.body) {
//     return res.status(400).send({ message: "Data to update can not be empty" });
//   }

//   const id = req.params.id;
//   Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//     .then((data) => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot Update user with ${id}. Maybe user not found!`,
//         });
//       } else {
//         res.send(data);
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({ message: "Error Update user information" });
//     });
// };

// // Delete a user with specified user id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Userdb.findByIdAndDelete(id)
//     .then((data) => {
//       if (!data) {
//         res
//           .status(404)
//           .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
//       } else {
//         res.send({
//           message: "User was deleted successfully!",
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Could not delete User with id=" + id,
//       });
//     });
// };

// exports.allusers=(req,res)=>{
//   //console.log("hi")
//   Userdb.find({}).select({"name":0,"_id":0,"__v":0})
//   .then((data)=>{
//     if(!data){
//       res.send("unable to fetch users")
//     }
//     else{
//       res.send(data)
//     }
//   })



// }




// **************Manager Creation*******************************


exports.createmanager=(req,res)=>{

   if(!req.body) {


    res.status(400).send({ message: "Content can not be empty!" });
    return;


   }

   else{


    const user = new Userdb({

        
          name: req.body.name,
          manager: req.body.manager,
          employees:req.body.employees,
          ismanager: true
        });



        user
            .save(user)
            .then((data) => {
              
              res.status('201').send("Manager added successfully");
                
        
            })
            .catch((err) => {
              res.status(500).send({
                message:
                  err.message ||
                  "Some error occurred while creating a create operation",
              });
              
        
            });


  









   }



  
}


//*****************************************employee creation**********************/


exports.create_employee=(req,res)=>{



  if(!req.body) {


    res.status(400).send({ message: "Content can not be empty!" });
    return;


   }

   else{



          Userdb.find({name:req.body.manager}).then((data)=>{

              
            if(data==""){


              res.send("Manager doesn't exist ")
              return


            }

            //console.log("hiiiiiiiiiii")

              const status=employees=""?false:true

 
            const user = new Userdb({
              name: req.body.name,
              manager: req.body.manager,
              employees:req.body.employees,
              ismanager: status
            });
    
    
    
            user
                .save(user)
                .then((data) => {
                  
                  res.status('201').send("employee added successfully");
                    
            
                })
                .catch((err) => {
                  res.status(500).send({
                    message:
                      err.message ||
                      "Some error occurred while creating a create operation",
                  });
                  
            
                });








          }) 
          
          .catch((error)=>{




            res.send(error)
          })


        
  









   }





}




// get controllers

// *************************** getting all users*****************************



exports.getall=(req,res)=>{


 Userdb.find({ismanager:true}).then((data)=>{

//console.log(data)

// const list=data.map((d,index)=>{

//   return [d.name , d.employees]
// })

//console.log(list)
var users={}
for(i=0;i<data.length;i++){

  //users[data[i].name]=users.data[i].employees;

  users[data[i].name]= data[i].employees



}


res.json(users)

 })

}



exports.getoneuser=(req,res)=>{



const search_key=req.params.singleUser


Userdb.findOne({name:search_key},{_id:0,__v:0,ismanager:0})
.then((data)=>{
  res.send(data)
})
.catch((error)=>{
  res.send("user doesn't exist")
})






}


//**********************updating user**********************************************/
// exports.updateuser=(req,res)=>{

// const search_key= req.params.employee_name

// console.log(search_key)


//  Userdb.find({name:search_key}).then((data)=>{

// if(data=""){

// res.send(" employee doesn't exist ")

// }
// else{


// if(verifyexist(req.body.manger)){

// res.send("Manger your are trying doesn't exist")

// }

// else{



// Userdb.update(name=search_key,req.body,{ useFindAndModify: false })

// .then((data)=>{
//   res.send("user updated successfully")
// })
// .catch(error)

//      res,send(error)
// }












// }


// })

// .catch(

//   res.send("problem in fetching user")
// )


// }






exports.updateuser=async (req,res)=>{

 const search_key=req.params.employee_name
 console.log(req.body.manager)


 Userdb.find({name:req.body.manager})
 .then((data)=>{

       console.log(req.body)
       console.log(data)


    if(data!=""){
 
        

      Userdb.findOneAndUpdate({name:search_key},req.body)
      .then((data)=>{res.send('updated successfully')})
      .catch((error)=>{res.send(error)})


    }
    else{


      res.send("manager doesn't exist")
    }

 })
 .catch((error)=>{

   res.send("manager doesn't exist")

 })









// //let status
// //console.log(verify(search_key,status))
// //console.log(test)
//   const verifyexist =await verify(search_key)

//  if(verify(search_key)){


// if(verify(req.body.manager)){


//   Userdb.updateOne(name=search_key,req.body,{ useFindAndModify: false })
//   .then((data)=>{res.send("userupdated successfully")})
//   .catch((error)=>{res.send("unable to update user")})





// }
// else{



//   res.send("manager for trying to update doesn't exist")
// }




// }
// else(res.send("user you are trying update doesn't exist"))



//  Userdb.find({name:req.params.manager})
//  .then(



}


//  )
//  .catch((error)=>{
//    res.send(`unable to update manager as given manager doesn't exist`)
//  })



















// function  verify(user){

//   console.log(`${user } this is not null`)
 
//    Userdb.find({name:user}).then((data)=>{
 
//      console.log(data)
 
//      if(data==""){
//        //console.log("hii")
 
 
       
//        return true
       
       
 
//      }
//      else{
 
//        //console.log("hello")
        
 
//        return false
       
 
//      }
 
 
   
 
 
//    })
 
//  }





//******************************delete user**************** */


exports.delete_employee=(req,res)=>
{
  
  //const cdate={}





        const search_key=req.params.employee_name

  // check wether employee exist
      console.log(search_key)

 Userdb.findOne({name:search_key})
    .then((data)=>{

      
      
     
     //if(data[])
      const manager= data.manager
       const employees=data.employees
       const ismanager=data.ismanager
     
      Userdb.deleteOne({name:search_key})
      .then((data)=>{
       res.send("deleted sucessfully")
         
       swapstatus(manager,employees,ismanager,search_key)


      })
      .catch((error)=>{
       res.send("unable to delete")
      })
     
     })
     .catch((error)=>{

      res.send("user doesn't exist")






      
     })




          

}


 










 
//if(exist){

//wether they are manager


//ifmanager













//}


 










 


// if(ismanager){


//   Userdb.updateMany({manager:search_key},{manager:manager})
//   .then((data)=>{
  
//     console.log("their employees managers are updated")
//   })
  
//   .catch((error)=>{
  
  
//     console.log("error in updating their employee's manager")
//   })
  
//   Userdb.updateOne({name:manager},{$push:{employees:employees}})
  
  
  
//   }
  
//   Userdb.updateOne({name:manager},{$pull:{employees:search_key}})
  
  
  
//   })
//   .catch((error)=>{res.send("unable to find the employee please provide valid name")})




function swapstatus(manager,employees,ismanager,search_key){




   if(ismanager)
   
   
   {


      Userdb.updateMany({manager:search_key},{manager:manager})
      .then((data)=>{
      
        console.log("updated employees manager are updated")
      })
      
      .catch((error)=>{
      
      
        console.log("unable to updated employees manager are updated")
      })
      
       Userdb.updateOne({name:manager},{   $pull:{employees:search_key,$push:{employees:employees} } }   )

         .then((data)=>{

           console.log("updated manager employee's list with new list")

         })
         .catch((error)=>{


          console.log("unable to update managers employee's list with new list")


         })
      
      
      
      }
      
       Userdb.updateOne({name:manager},{$pull:{employees:search_key}})

       
       
       .then((data)=>{

        //console.log(`${manager},${search_key},${employees} this is important`)

        console.log("removed current user from  managers's employee list")
           
            

       })
       .catch((error)=>{


        console.log("error in removing current user from  managers's employee list")

          
       })
      
      
      
    //   })
    //   .catch((error)=>{res.send("unable to find the employee please provide valid name")})
    
    


  




}




































// const { name } = require("ejs");
// var Userdb = require("../model/model");







// // ************** Creation*******************************

// ////////manager creation //////////////
// exports.createmanager=(req,res)=>{

//    if(!req.body) {


//     res.status(400).send({ message: "Content can not be empty!" });
//     return;


//    }

//    else{


//     const user = new Userdb({

        
//           name: req.body.name,
//           manager: req.body.manager,
//           employees:req.body.employees,
//           ismanager: true
//         });



//         user
//             .save(user)
//             .then((data) => {
              
//               res.status('201').send("Manager added successfully");
                
        
//             })
//             .catch((err) => {
//               res.status(500).send({
//                 message:
//                   err.message ||
//                   "Some error occurred while creating a create operation",
//               });
              
        
//             });


  
//    }



  
// }


// ////////////////employee creation//////////////////


// exports.create_employee=(req,res)=>{



//   if(!req.body) {


//     res.status(400).send({ message: "Content can not be empty!" });
//     return;


//    }

//    else{



//           Userdb.find({name:req.body.manager}).then((data)=>{

              
//             if(data==""){


//               res.send("Manager doesn't exist ")
//               return


//             }

//             //console.log("hiiiiiiiiiii")

//               const status=req.body.employees==""?false:true
//               console.log(status)

 
//             const user = new Userdb({
//               name: req.body.name,
//               manager: req.body.manager,
//               employees:req.body.employees,
//               ismanager: status
//             });
    
    
    
//             user
//                 .save(user)
//                 .then((data) => {
                  
//                   res.status('201').send("employee added successfully");
                    
            
//                 })
//                 .catch((err) => {
//                   res.status(500).send({
//                     message:
//                       err.message ||
//                       "Some error occurred while creating a create operation",
//                   });
                  
            
//                 });




//           }) 
          
//           .catch((error)=>{




//             res.send(error)
//           })



//    }



// }





// // ************************************ getting *****************************
// //////////// all users/////////////////////


// exports.getall=(req,res)=>{


//  Userdb.find({ismanager:true}).then((data)=>{


// var users={}
// for(i=0;i<data.length;i++){

//   users[data[i].name]= data[i].employees

// }


// res.json(users).status(200)

//  })

//  .catch((error)=>{
//    res.status(404).send("unable to process")
//  })

// }

// /////////////////// getting singleuser/////////////////

// exports.getoneuser=(req,res)=>{



// const search_key=req.params.singleUser


// Userdb.findOne({name:search_key},{_id:0,__v:0,ismanager:0})
// .then((data)=>{


//   console.log(data)
  
// if(data==null){

//   res.status(404).send("user doesn't exist")
// }
// else{



//   res.send(data)
// }



// })


// .catch((error)=>{
//   res.status(404).send("error in getting resource")
// })






// }


// //**********************updating user**********************************************/


// exports.updateuser= (req,res)=>{

//  const search_key=req.params.employee_name
//  //console.log(req.body.manager)


//  Userdb.find({name:req.body.manager})
//  .then((data)=>{

//        //console.log(req.body)
//        //console.log(data)
       


//     if(data!=""){
 
        

//       Userdb.findOneAndUpdate({name:search_key},req.body)
//       .then((data)=>{

           

//       // console.log(`${data} am serious`)
//       // const manager= data.manager
//       // const employees=data.employees
//       // const ismanager=data.ismanager
//       // //Userdb.findOneAndUpdate(name=data.manager)\
//       // swapstatus(manager,employees,ismanager,search_key)



//       if(data==null){

//         res.status(404).send("user doesn't exist")
//       }
//       else{
      
      
      
//         res.send('updated successfully')
//       }
    
    
    
//     })
//       .catch((error)=>{res.send(error)})


//     }
//     else{


//       res.send("manager doesn't exist")
//     }

//  })
//  .catch((error)=>{

//    res.send("manager doesn't exist")

//  })


// }



// //******************************delete user**************** */


// exports.delete_employee=(req,res)=>
// {
  
  





//         const search_key=req.params.employee_name

//   // check wether employee exist
//       console.log(search_key)

//  Userdb.findOne({name:search_key})
//     .then((data)=>{

      
      
     
     
//       const manager= data.manager
//        const employees=data.employees
//        const ismanager=data.ismanager
     
//       Userdb.deleteOne({name:search_key})
//       .then((data)=>{
//        res.send("deleted sucessfully")
         
//        swapstatus(manager,employees,ismanager,search_key)


//       })
//       .catch((error)=>{
//        res.send("unable to delete")
//       })
     
//      })
//      .catch((error)=>{

//       res.send("user doesn't exist")


//      })


// }


 


// function swapstatus(manager,employees,ismanager,search_key){


//    if(ismanager)
   
   
//    {


//       Userdb.updateMany({manager:search_key},{manager:manager})
//       .then((data)=>{
      
//         console.log("updated employees manager are updated")
//       })
      
//       .catch((error)=>{
      
      
//         console.log("unable to updated employees manager are updated")
//       })
      
//        Userdb.updateOne({name:manager},{$push:{employees:employees} } )

//          .then((data)=>{

//            console.log("updated manager employee's list with new list")

//          })
//          .catch((error)=>{


//           console.log("unable to update managers employee's list with new list")


//          })
      
      
      
//       }
      
//        Userdb.updateOne({name:manager},{$pull:{employees:search_key}})

       
       
//        .then((data)=>{

//         //console.log(`${manager},${search_key},${employees} this is important`)

//         console.log("removed current user from  managers's employee list")
           
            

//        })
//        .catch((error)=>{


//         console.log("error in removing current user from  managers's employee list")

          
//        })
      
     
// }