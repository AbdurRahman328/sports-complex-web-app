var userService = require('./stadiumService.ts');

var getDataConntrollerfn = async (req, res) =>
{
    var empolyee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": empolyee });
}

var createStadiumControllerFn = async (req, res) => 
{
    var status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Stadium created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating Stadium" });
    }
}

var updateStadiumController = async (req, res) => 
{
    console.log(req.params.id);
    console.log(req.body);
     
    var result = await userService.updateUserDBService(req.params.id,req.body);

     if (result) {
        res.send({ "status": true, "message": "Stadium Details Updated"} );
     } else {
         res.send({ "status": false, "message": "Stadium Updated Failed" });
     }
}

var deleteStadiumController = async (req, res) => 
{
     console.log(req.params.id);
     var result = await userService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Stadium Deleted"} );
     } else {
         res.send({ "status": false, "message": "Stadium Deleted Failed" });
     }
}
module.exports = { getDataConntrollerfn, createStadiumControllerFn,updateStadiumController,deleteStadiumController };