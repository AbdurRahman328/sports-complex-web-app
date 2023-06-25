var express = require('express');
 
const router = express.Router();

 
var custController = require('../src/loginregister/customerController.ts');
 
router.route('/cust/login').post(custController.loginCustControllerFn);
router.route('/cust/create').post(custController.createCustControllerFn);
router.route('/cust/get/:id').get(custController.getMemDataConntrollerfn);
 

var sportController = require('../src/loginregister/sportsController.ts');
 
router.route('/sports/getAll').get(sportController.getDataConntrollerfn);
router.route('/sports/create').post(sportController.createSportControllerFn);
router.route('/sports/update/:id').patch(sportController.updateSportController); 
router.route('/sports/delete/:id').delete(sportController.deleteSportController);
router.route('/sports/gets/:id').get(sportController.getMemSportConntrollerfn);


var stadiumController = require('../src/loginregister/stadiumController.ts');
 
router.route('/stadium/getAll').get(stadiumController.getDataConntrollerfn);
router.route('/stadium/create').post(stadiumController.createStadiumControllerFn);
router.route('/stadium/update/:id').patch(stadiumController.updateStadiumController); 
router.route('/stadium/delete/:id').delete(stadiumController.deleteStadiumController);

var coachController = require('../src/loginregister/coachController.ts');
 
router.route('/coach/getAll').get(coachController.getDataConntrollerfn);
router.route('/coach/create').post(coachController.createCoachControllerFn);
router.route('/coach/update/:id').patch(coachController.updateCoachController); 
router.route('/coach/delete/:id').delete(coachController.deleteCoachController);

var staffController = require('../src/loginregister/staffController.ts');
 
router.route('/staff/getAll').get(staffController.getDataConntrollerfn);
router.route('/staff/create').post(staffController.createStaffControllerFn);
router.route('/staff/update/:id').patch(staffController.updateStaffController); 
router.route('/staff/delete/:id').delete(staffController.deleteStaffController);

var eventsController = require('../src/loginregister/eventsController.ts');
 
router.route('/events/getAll').get(eventsController.getDataConntrollerfn);
router.route('/events/creates').post(eventsController.createEventsControllerFn);
router.route('/events/update/:id').patch(eventsController.updateEventsController); 
router.route('/events/delete/:id').delete(eventsController.deleteEventsController);

var materialController = require('../src/loginregister/materialController.ts');
 
router.route('/material/getAll').get(materialController.getDataConntrollerfn);
router.route('/material/create').post(materialController.createMaterialControllerFn);
router.route('/material/update/:id').patch(materialController.updateMaterialController); 
router.route('/material/delete/:id').delete(materialController.deleteMaterialController);

var cdController = require('../src/loginregister/cdController.ts');
 
router.route('/cd/getAll').get(cdController.getDataConntrollerfn);
router.route('/cd/creates').post(cdController.createCdControllerFn);
router.route('/cd/update/:id').patch(cdController.updateCdController); 
router.route('/cd/delete/:id').delete(cdController.deleteCdController);
router.route('/cd/get/:id').get(cdController.getSingleDataConntrollerfn);

var apController = require('../src/loginregister/apController.ts');
 
router.route('/ap/getAll').get(apController.getDataConntrollerfn);
router.route('/ap/getap/:id').get(apController.getMemDataConntrollerfn);
router.route('/ap/created').post(apController.createEventsControllerFn);
router.route('/ap/update/:id').patch(apController.updateEventsController); 
router.route('/ap/delete/:id').delete(apController.deleteEventsController);

var memController = require('../src/loginregister/membershipController.ts');
 
router.route('/membership/getAll').get(memController.getDataConntrollerfn);
router.route('/membership/getmem/:id').get(memController.getMemDataConntrollerfn);
router.route('/membership/created').post(memController.createMemControllerFn);
router.route('/membership/update/:id').patch(memController.updateMemController); 
router.route('/membership/delete/:id').delete(memController.deleteMemController);

var queryController = require('../src/loginregister/queryController.ts');
 
router.route('/query/getAll').get(queryController.getDataConntrollerfn);
router.route('/query/getquery').post(queryController.createCdControllerFn);
router.route('/query/delete/:id').delete(queryController.deleteCdController);

module.exports = router;



 

