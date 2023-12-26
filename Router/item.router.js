import express from 'express'
import { deleteproductdetails, getproductdetails, productdetails } from '../Controller/item.controller.js';

const router=express.Router()

router.post('/product',productdetails)
router.get('/get/product',getproductdetails)
router.delete('/delete/product/:id',deleteproductdetails)



export default router;