var userService = require('./staffService.ts');

var getDataConntrollerfn = async (req, res) =>
{
    var empolyee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": empolyee });
}

var createStaffControllerFn = async (req, res) => 
{
    var status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Staff created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating Staff" });
    }
}


var updateStaffController = async (req, res) => 
{
    console.log(req.params.id);
    console.log(req.body);
     
    var result = await userService.updateUserDBService(req.params.id,req.body);

     if (result) {
        res.send({ "status": true, "message": "Staff Details Updated"} );
     } else {
         res.send({ "status": false, "message": "Staff Updated Failed" });
     }
}

var deleteStaffController = async (req, res) => 
{
     console.log(req.params.id);
     var result = await userService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Staff Deleted"} );
     } else {
         res.send({ "status": false, "message": "Staff Deleted Failed" });
     }
}
module.exports = { getDataConntrollerfn, createStaffControllerFn,updateStaffController,deleteStaffController };