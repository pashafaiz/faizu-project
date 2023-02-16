const express = require('express');
const router = express.Router();
const { getusers,postusers,putusers,deleteusers}= require('../controllers/usercontroler')

router.get('/',getusers)
router.post('/',postusers)
router.put('/',putusers)
router.delete('/',deleteusers)
// router.get('/',(req,res)=>{




router.route('/').get(getusers).post(postusers);
router.route('/:id').delete(deleteusers).put(putusers)

module.exports = router;