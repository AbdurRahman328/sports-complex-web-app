
var custService = require('./customerService.ts');
 
var createCustControllerFn = async (req, res) =>
{
    try
    {
    console.log(req.body);
    var status = await custService.createCustDBService(req.body);
    console.log(status);
 
    if (status) {
        res.send({ "status": true, "message": "customer created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}

catch(err)
{
    console.log(err);
}
}

var loginCustControllerFn = async (req, res) => {
    var result ; //=null
    try {
        result = await custService.logincustDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } 
        else {
            res.send({ "status": false, "message": result.msg });
        } 
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

var getMemDataConntrollerfn = async (req, res) =>
{

    var result ; //=null
    try {
        result = await custService.getMemDataFromDBService(req.params.id);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } 
        else {
            res.send({ "status": false, "message": result.msg });
        } 
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

module.exports = { createCustControllerFn,loginCustControllerFn,getMemDataConntrollerfn};