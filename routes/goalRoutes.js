const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>res.json({msg:'Get goal'}))
router.post('/',(req,res)=>res.json({msg:'Set goal'}))
router.put('/:id',(req,res)=>res.json({msg:`Update goal ${req.params.id}`}))
router.delete('/:id',(req,res)=>res.json({msg:`Delete goal ${req.params.id}`}))




module.exports = router