var userService = require('./coachService.ts');

var getDataConntrollerfn = async (req, res) =>
{
    var empolyee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": empolyee });
}

var createCoachControllerFn = async (req, res) => 
{
    var status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Coach created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating Coach" });
    }
}

var updateCoachController = async (req, res) => 
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

var deleteCoachController = async (req, res) => 
{
     console.log(req.params.id);
     var result = await userService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Coach Deleted"} );
     } else {
         res.send({ "status": false, "message": "Coach Deleted Failed" });
     }
}
module.exports = { getDataConntrollerfn, createCoachControllerFn,updateCoachController,deleteCoachController };