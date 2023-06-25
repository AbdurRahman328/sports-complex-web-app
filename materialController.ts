var userService = require('./materialService.ts');

var getDataConntrollerfn = async (req, res) =>
{
    var empolyee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": empolyee });
}

var createMaterialControllerFn = async (req, res) => 
{
    var status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Material created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating Material" });
    }
}


var updateMaterialController = async (req, res) => 
{
    console.log(req.params.id);
    console.log(req.body);
     
    var result = await userService.updateUserDBService(req.params.id,req.body);

     if (result) {
        res.send({ "status": true, "message": "Material Details Updated"} );
     } else {
         res.send({ "status": false, "message": "Material Updated Failed" });
     }
}

var deleteMaterialController = async (req, res) => 
{
     console.log(req.params.id);
     var result = await userService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Material Deleted"} );
     } else {
         res.send({ "status": false, "message": "Material Deleted Failed" });
     }
}
module.exports = { getDataConntrollerfn, createMaterialControllerFn,updateMaterialController,deleteMaterialController };