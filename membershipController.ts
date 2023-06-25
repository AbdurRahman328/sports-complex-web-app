var userService = require('./membershipService.ts');

var getDataConntrollerfn = async (req, res) =>
{
    var empolyee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": empolyee });
}

var getMemDataConntrollerfn = async (req, res) =>
{
    var empolyee = await userService.getMemDataFromDBService(req.params.id);
    res.send({ "status": true, "data": empolyee });
}


var createMemControllerFn = async (req, res) => 
{
    var status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Sports created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating sports" });
    }
}

var updateMemController = async (req, res) => 
{
    console.log(req.params.id);
    console.log(req.body);
     
    var result = await userService.updateUserDBService(req.params.id,req.body);

     if (result) {
        res.send({ "status": true, "message": "Sport Details Updated"} );
     } else {
         res.send({ "status": false, "message": "Sport Updated Failed" });
     }
}

var deleteMemController = async (req, res) => 
{
     console.log(req.params.id);
     var result = await userService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Sport Deleted"} );
     } else {
         res.send({ "status": false, "message": "Sport Deleted Failed" });
     }
}
module.exports = { getDataConntrollerfn, getMemDataConntrollerfn,createMemControllerFn,updateMemController,deleteMemController };
