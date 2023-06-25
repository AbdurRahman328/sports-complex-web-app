var userService = require('./eventsService.ts');

var getDataConntrollerfn = async (req, res) =>
{
    var empolyee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": empolyee });
}

var createEventsControllerFn = async (req, res) => 
{
    var status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Events created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating Events" });
    }
}

var updateEventsController = async (req, res) => 
{
    console.log(req.params.id);
    console.log(req.body);
     
    var result = await userService.updateUserDBService(req.params.id,req.body);

     if (result) {
        res.send({ "status": true, "message": "Events Details Updated"} );
     } else {
         res.send({ "status": false, "message": "Events Updated Failed" });
     }
}

var deleteEventsController = async (req, res) => 
{
     console.log(req.params.id);
     var result = await userService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Events Deleted"} );
     } else {
         res.send({ "status": false, "message": "Events Deleted Failed" });
     }
}
module.exports = { getDataConntrollerfn, createEventsControllerFn,updateEventsController,deleteEventsController };