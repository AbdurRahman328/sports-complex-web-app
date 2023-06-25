var custModel = require('./customerModel.ts');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);
 
module.exports.createCustDBService = (custDetails) => {
 
 
   return new Promise(function myFn(resolve, reject) {
 
       var custModelData = new custModel();
 
       custModelData.username = custDetails.username;
       custModelData.password = custDetails.password;
       custModelData.email = custDetails.email;
       custModelData.type = custDetails.type;


       var encrypted = encryptor.encrypt(custDetails.password);
       custModelData.password = encrypted;
 
       custModelData.save(function resultHandle(error, result) {
 
           if (error) {
               reject(error);
           } else {
               resolve(true);
   
           }
       });
 
   });
 
}

module.exports.getMemDataFromDBService = (id) => {

   console.log(id);
   return new Promise(function checkURL(resolve, reject) {

      custModel.findOne({username:id}, function getresult(errorvalue, result) {

         if(errorvalue)
         {
            reject({status: false, msg: "Invaild Data"});
         }
         else
         {
            if(result !=undefined &&  result !=null)
            {
               resolve({status: true,msg: result.username});
            }
            else
            {
               reject({status: false,msg: "Customer Error Details"});
            }
         }
       });

   });

}

module.exports.logincustDBService = (custDetails)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      custModel.findOne({ username: custDetails.username},function getresult(errorvalue, result)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild Data"});
         }
         else
         {
            if(result !=undefined &&  result !=null)
            {
               var decrypted = encryptor.decrypt(result.password);
               if(decrypted== custDetails.password)
               {
                  resolve({status: true,msg: result.type});
               }
               else
               {
                  reject({status: false,msg: "Customer Validated failed"});
               }
            }
            else
            {
               reject({status: false,msg: "Customer Error Details"});
            }
 
         }
      
      });
      
   });
}