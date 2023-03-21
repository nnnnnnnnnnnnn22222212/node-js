import express from 'express';
import { getProduct, createProduct, deleteProduct, getProductById, updateProduct } from '../controller/main';
const router = express.Router();
const data = [
    {id: 1, name: "Sơn"},
    {id: 2, name: "Hằng"},
    {id: 3, name: "Minh"},
    {id: 4, name: "Trường"},
]

router.get('/products', getProduct)

router.get('/products/:id', getProductById)

router.post('/products', createProduct)

router.put('/products/:id', updateProduct)

router.delete("/products/:id", deleteProduct)
export default router