var userService = require('./apService.ts');

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

var createEventsControllerFn = async (req, res) => 
{
    var status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Events Registration successfully" });
    } else {
        res.send({ "status": false, "message": "Error Registration Events" });
    }
}

var updateEventsController = async (req, res) => 
{
    console.log(req.params.id);
    console.log(req.body);
     
    var result = await userService.updateUserDBService(req.params.id,req.body);

     if (result) {
        res.send({ "status": true, "message": "Events Registration Details Updated"} );
     } else {
         res.send({ "status": false, "message": "Events Registration Updated Failed" });
     }
}

var deleteEventsController = async (req, res) => 
{
     console.log(req.params.id);
     var result = await userService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Events Registration Deleted"} );
     } else {
         res.send({ "status": false, "message": "Events Registration Deleted Failed" });
     }
}
module.exports = { getDataConntrollerfn, getMemDataConntrollerfn,createEventsControllerFn,updateEventsController,deleteEventsController };