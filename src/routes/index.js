const express = require('express');
const router = express.Router();
const {postPromotion, putPromotion, deletePromotion, getPromotion} = require('./controllers/promotionCRUD')
const {postRecommendation, putRecommendation, deleteRecommendation, getRecommendation} = require('./controllers/recommendationCRUD')
const {postService, putService, deleteService, getService} = require('./controllers/serviceCRUD')
const {postTestimony, putTestimony, deleteTestimony, getTestimony} = require('./controllers/testimonyCRUD')
const {postTips, putTips, deleteTips, getTips} = require('./controllers/tipsCRUD')
const {postUser, putUser,deleteUser, getUser} = require('./controllers/userCRUD')

//rutas usuario
router.post('/postUser', postUser)
router.put('/putUser', putUser)
router.delete('/deleteUser', deleteUser)
router.get('/getUsuarios', getUser)

//rutas de promocion
router.post('/postPromotion', postPromotion)
router.put('/putPromotion/:id', putPromotion);
router.delete('/deletePromotion/:id', deletePromotion);
router.get('/getPromotion', getPromotion);

//rutas de recomendaciones
router.post('/postRecommendation', postRecommendation)
router.put('/putRecommendation/:id', putRecommendation);
router.delete('/deleteRecommendation/:id', deleteRecommendation);
router.get('/getRecommendation', getRecommendation);

//rutas de servicios
router.post('/postService', postService)
router.put('/putService/:id', putService);
router.delete('/deleteService/:id', deleteService);
router.get('/getService', getService);

//rutas de testimonios
router.post('/postTestimony', postTestimony)
router.put('/putTestimony/:id', putTestimony);
router.delete('/deleteTestimony/:id', deleteTestimony);
router.get('/getTestimony', getTestimony);

//rutas de tips
router.post('/postTips', postTips)
router.put('/putTips/:id', putTips);
router.delete('/deleteTips/:id', deleteTips);
router.get('/getTips', getTips);




module.exports = router;