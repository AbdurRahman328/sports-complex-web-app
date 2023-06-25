var userService = require('./sportsService.ts');

var getDataConntrollerfn = async (req, res) =>
{
    var empolyee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": empolyee });
}

var getMemSportConntrollerfn = async (req, res) =>
{
    var empolyee = await userService.getMemDataFromDBService(req.params.id);
    res.send({ "status": true, "data": empolyee });
}

var createSportControllerFn = async (req, res) => 
{
    var status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Sports created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating sports" });
    }
}

var updateSportController = async (req, res) => 
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

var deleteSportController = async (req, res) => 
{
     console.log(req.params.id);
     var result = await userService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Sport Deleted"} );
     } else {
         res.send({ "status": false, "message": "Sport Deleted Failed" });
     }
}
module.exports = { getDataConntrollerfn, getMemSportConntrollerfn,createSportControllerFn,updateSportController,deleteSportController };