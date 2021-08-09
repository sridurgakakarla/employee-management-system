




const { name } = require("ejs");
var Userdb = require("../model/model");


// ************** Creation*******************************

////////manager creation //////////////
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
          lastname:req.body.lastname,
          info:req.body.info,
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


////////////////employee creation//////////////////


exports.create_employee=(req,res)=>{



  if(!req.body) {


    res.status(400).send({ message: "Content can not be empty!" });
    return;


   }

   else{



          Userdb.find({name:req.body.manager}).then((data)=>{

              
            if(data==""){


              res.status(404).send("Manager doesn't exist ")
              return


            }

            //console.log("hiiiiiiiiiii")

              const status=req.body.employees==""?false:true
              console.log(status)

 
            const user = new Userdb({
              name: req.body.name,
              manager: req.body.manager,
              employees:req.body.employees,
              lastname:req.body.lastname,
              info:req.body.info,
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





// ************************************ getting *****************************
//////////// all users/////////////////////


exports.getall=(req,res)=>{


 Userdb.find({ismanager:true}).then((data)=>{


var users={}
for(i=0;i<data.length;i++){

  users[data[i].name]= data[i].employees

}


res.json(users).status(200)

 })

 .catch((error)=>{
   res.status(404).send("unable to process")
 })

}

/////////////////// getting singleuser/////////////////

exports.getoneuser=(req,res)=>{



const search_key=req.params.singleUser


Userdb.findOne({name:search_key},{_id:0,__v:0,ismanager:0})
.then((data)=>{


  console.log(data)
  
if(data==null){

  res.status(404).send("user doesn't exist")
}
else{



  res.send(data)
}



})


.catch((error)=>{
  res.status(404).send("error in getting resource")
})






}


//**********************updating user**********************************************/


exports.updateuser= (req,res)=>{

 const search_key=req.params.employee_name
 //console.log(req.body.manager)


 Userdb.find({name:req.body.manager})
 .then((data)=>{

       //console.log(req.body)
       
       //console.log(data)
       


    if(data!=""){

        //console.log("hi")
 
      

      Userdb.findOneAndUpdate({name:search_key},req.body)
      .then((data)=>{
        
       // console.log(data)
        
      if(data== null){

        //console.log("hello")

        res.send("user doesn't exist")
      }
      else{
            
        const actualmanger=data.manager
      
           //console.log("hi hello")
      
        res.send('updated successfully')


         Userdb.findOneAndUpdate({name:req.body.manager},{$push:{employees:search_key}})
         .then((data)=>{
             

          console.log("added in new manager's employee list")


          Userdb.findOneAndUpdate({name:actualmanger},{$pull:{employees:search_key}})
          .then((data)=>{
           
            console.log("removed old manager's employee list")


          })
          .catch((error)=>{
            console.log("unable to remove from old manager's list")
          })





         })

         .catch((error)=>{

            console.log("unable to update manager's employee list")

         })


      }
    
    
    
    })
      .catch((error)=>{res.send(error)})


    }
    else{


      res.send("manager doesn't exist")
    }

 })
 .catch((error)=>{

   res.send("manager doesn't exist")

 })


}



//******************************delete user**************** */


exports.delete_employee=(req,res)=>
{
  
        const search_key=req.params.employee_name

  // check wether employee exist
     // console.log(search_key)

 Userdb.findOne({name:search_key})
    .then((data)=>{

      
      
     
     
      const manager= data.manager
       const employees=data.employees
       const ismanager=data.ismanager
     
      Userdb.deleteOne({name:search_key})
      .then((data)=>{
       res.send("deleted sucessfully")
         
       swapstatus(manager,employees,ismanager,search_key)


      })
      .catch((error)=>{
       res.status(409).send("unable to delete")
      })
     
     })
     .catch((error)=>{

      res.status(409).send("user doesn't exist")


     })


}


 


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
      
       Userdb.updateOne({name:manager},{$push:{employees:employees} } )

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
      
     
}