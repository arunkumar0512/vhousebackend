import itemcollection from "../Models/item.collection.schema.js";
import mongoose from "mongoose";



export const productdetails= async (req, res) => {
    try {
        const newProduct = req.body;
    const result = await itemcollection.create(newProduct);
    res.status(200).json({message:"product created",data:result});
        
    } catch (error) {
        
        console.log("product create error" ,error)
    }
    
}


export const getproductdetails=async(req,res)=>{
    try {
        const query = {};
            const cursor = itemcollection.find(query);
            const product = await cursor.exec();
            res.status(200).json({message:"get product",data:product});
        
    } catch (error) {
        console.log("get error" ,error)
        
    }
}

export const deleteproductdetails=async(req,res)=>{

    const deleteId = req.params.id

    const result = await itemcollection.deleteOne({ _id: deleteId })
    if (result.deletedCount === 0) {
        return res.status(404).json({ error: "product not found" })
    }
    res.status(200).json({ message: "deleted  successfully" })

}