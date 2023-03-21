import Joi from 'joi'
const data = [
    {id: 1, name: "Sơn"},
    {id: 2, name: "Hằng"},
    {id: 3, name: "Minh"},
    {id: 4, name: "Trường"},
]
const productSchema = Joi.object({
    name: Joi.string().required()
})
export const getProduct = (req, res) => {
    try {
        res.send(data)
        res.end()
    } catch (error) {
        res.status(500).send({
            message: "Lỗi server"
        })
        res.end()
    }
}
export const getProductById = (req, res) => {
    try {
        const id = req.params.id
        const product = data.find((item) => item.id == id)
        if (product) {
            res.send(product)
        } else {
            res.status(400).send({
                message: "San pham khong ton tai!"
            })
        }
    } catch(error) {
        res.status(500).send({
            message: "Lỗi server"
        })
        res.end()
    }
}
export const createProduct = (req, res) => {
    const newData = req.body
    const {error} = productSchema.validate(newData, {abortEarly: false})
    
    if(error) {
        res.status(400).send({
            errors : error.details.map(e => e.message)
        })
    } else {
        data.push(newData);
        res.send({
            message: "Thêm mới thành công",
            
        })
        res.end()
    }
}
export const updateProduct = (req, res) => {
    const id = req.params.id
    const updateData = req.body
    const productIndex = data.findIndex(item => item.id == id)
    if (productIndex >= 0) {
        data[productIndex] = { ...data[productIndex], ...updateData }
        console.log(updateData);
        res.send(data[productIndex])
        res.end()
    } else {
        res.status(400).send("Sản phẩm không tồn tại!")
    }
}
export const deleteProduct = (req, res) => {
    try {
        const id = req.params.id
        const productIndex = data.findIndex(item => item.id == id)
        if (productIndex >= 0) {
            data.splice(productIndex, 1)
            res.json(data)
            res.end()
        } else {
            res.status(400).send("Sản phẩm không tồn tại!")
        }
    } catch(error) {
        res.status(500).send({
            message: "Lỗi server"
        })
        res.end()
    }

}