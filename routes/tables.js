// const express = require('express');
// const router = express.Router();
// const Item = require('../models/Table');

// router.post('/', async (req,res)=>{
//     const table = new Item({
//         table_no: req.body.table_no,
//         capacity: req.body.capacity,
//         section: req.body.section
//     });
//     try{
//         const savedTable = await table.save();
//         res.json(savedTable);
//     }catch (err){
//         res.json({message: err});
//     }
// });
// module.exports = router;