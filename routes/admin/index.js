module.exports = app => {
    const express = require('express') 
    const router = express.Router()
    const Category = require('../../models/Category')


    router.post('/categories',async (req,res) => {
        const model = await Category.create(req.body)
        res.send(model)
    })

    router.get('/categories',async (req,res) => {
        const items = await Category.find()
        res.send(items)
        // console.log(req.body)
    })

    router.get('/categories/:id',async (req,res) => {
        const items = await Category.findById(req.params.id)
        res.send(items)
        // console.log(req.body)
    })
 
    app.use('admin/api',router)


}