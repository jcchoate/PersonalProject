const session = require('express-session')
let items = []
let uniqueId = 1



module.exports = {
    getItems: (req, res) => {
        res.status(200).send(items)
        console.log('session', req.session)
    },
    getOneItem: (req, res) => {
        
        res.status(200).send(oneItem)
    },
    create: (req, res) => {
        const {
            name,
            price,
            imageAddress
        } = req.body
        let newItem = {
            name: name,
            imageAddress: imageAddress,
            price: price,
            id: uniqueId,
        }
        let seshcart = req.session.cart
        uniqueId++
        items.push(newItem)
        res.status(200).send(items)
        console.log('Completed')
    },
    
    edit: (req, res) => {
        // console.log(req.body)
        const {
            newPrice
        } = req.body
        const {
            id
        } = req.params
        // console.log(req.params)
        const itemId = items.findIndex((item) => id == item.id)
        items[gameId].priceTotal= newPrice
        console.log(items)
        res.status(200).send(items)
    },
    delete: (req, res) => {
        const {
            id
        } = req.params
        console.log(req.params)
        const itemId = items.findIndex((item) => id == item.id)

        items.splice(itemId, 1)
        res.status(200).send(items)
    }
}