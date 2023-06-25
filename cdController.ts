var userService = require('./cdService.ts');

var getDataConntrollerfn = async (req, res) =>
{
    var empolyee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": empolyee });
}

var getSingleDataConntrollerfn = async (req, res) =>
{
    var empolyee = await userService.showUserDBService();
    res.send({ "status": true, "data": empolyee });
}

var createCdControllerFn = async (req, res) => 
{
    var status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Coach created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating Coach" });
    }
}

var updateCdController = async (req, res) => 
{
    console.log(req.params.id);
    console.log(req.body);
     
    var result = await userService.updateUserDBService(req.params.id,req.body);

     if (result) {
        res.send({ "status": true, "message": "Coach Details Updated"} );
     } else {
         res.send({ "status": false, "message": "Coach Updated Failed" });
     }
}

var deleteCdController = async (req, res) => 
{
     console.log(req.params.id);
     var result = await userService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Coach Deleted"} );
     } else {
         res.send({ "status": false, "message": "Coach Deleted Failed" });
     }
}
module.exports = { getDataConntrollerfn, getSingleDataConntrollerfn,createCdControllerFn,updateCdController,deleteCdController };