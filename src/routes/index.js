const express = require('express');
const router = express.Router();
const {postPromotion, putPromotion, deletePromotion, getPromotion} = require('./controllers/promotionCRUD')
const {postRecommendation, putRecommendation, deleteRecommendation, getRecommendation} = require('./controllers/recommendationCRUD')
const {postService, putService, deleteService, getService} = require('./controllers/serviceCRUD')
const {postTestimony, putTestimony, deleteTestimony, getTestimony} = require('./controllers/testimonyCRUD')
const {postTips, putTips, deleteTips, getTips} = require('./controllers/tipsCRUD')
const {postUser, putUser,deleteUser, getUser} = require('./controllers/userCRUD');
const {postReservation, getReservation} = require('./controllers/reservation');
const { registerUser, loginUser } = require('./controllers/login');
const { tokenValidation } = require('./controllers/tokenValidator');
const {signup, getbill} = require('./controllers/sendEmail')
const {postSchedule, getSchedule} = require('./controllers/scheduleCRUD')

router.post('/postSchedule', postSchedule)
router.get('/getSchedule', getSchedule)

router.post('/postReservation', postReservation)
router.get('/getReservation', getReservation)

router.post('/getbill', getbill)
router.post('/email', signup)
//rutas usuario
router.post('/postUser', postUser)
router.put('/putUser', putUser)
router.delete('/deleteUser', deleteUser)
router.get('/getUsuarios', getUser)

// rutas de registro e inicio de sesion
router.post('/registerUser', registerUser)
router.post('/loginUser', loginUser)

//rutas de promocion
router.post('/postPromotion', tokenValidation, postPromotion)
router.put('/putPromotion/:id',tokenValidation, putPromotion);
router.delete('/deletePromotion/:id',tokenValidation, deletePromotion);
router.get('/getPromotion', getPromotion);

//rutas de recomendaciones
router.post('/postRecommendation', tokenValidation, postRecommendation)
router.put('/putRecommendation/:id', tokenValidation,  putRecommendation);
router.delete('/deleteRecommendation/:id', tokenValidation, deleteRecommendation);
router.get('/getRecommendation', getRecommendation);

//rutas de servicios
router.post('/postService',tokenValidation, postService)
router.put('/putService/:id', tokenValidation, putService);
router.delete('/deleteService/:id', tokenValidation, deleteService);
router.get('/getService', getService);

//rutas de testimonios
router.post('/postTestimony', postTestimony)
router.put('/putTestimony/:id', putTestimony);
router.delete('/deleteTestimony/:id',deleteTestimony);
router.get('/getTestimony', getTestimony);

//rutas de tips
router.post('/postTips', tokenValidation, postTips)
router.put('/putTips/:id', tokenValidation, putTips);
router.delete('/deleteTips/:id', tokenValidation, deleteTips);
router.get('/getTips', getTips);




module.exports = router;