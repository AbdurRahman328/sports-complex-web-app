var userService = require('./queryService.ts');

var getDataConntrollerfn = async (req, res) =>
{
    var empolyee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": empolyee });
}

var createCdControllerFn = async (req, res) => 
{
    var status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Message Sent successfully" });
    } else {
        res.send({ "status": false, "message": "Error Senting Message" });
    }
}



var deleteCdController = async (req, res) => 
{
     console.log(req.params.id);
     var result = await userService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Message Sent Successfully"} );
     } else {
         res.send({ "status": false, "message": "Message Deleted Failed" });
     }
}
module.exports = { getDataConntrollerfn,createCdControllerFn,deleteCdController };