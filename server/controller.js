let items = []
let uniqueId = 1


module.exports = {
    getItems: (req, res) => {
        res.status(200).send(req.session.cart || [])
        console.log('session', req.session)
    },
    getOneItem: (req, res) => {
        
        res.status(200).send(oneItem)
    },
    create: (req, res) => {
        if(!req.session.cart){
            req.session.cart=[]
        }
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
        uniqueId++
        req.session.cart.push(newItem)
        res.status(200).send(req.session.cart)
        console.log('Completed')
    },
    
    edit: (req, res) => {
        // console.log(req.body)
        const {
            name
        } = req.body
        const {
            id
        } = req.params
        const {
            cart
        } = req.session
        const itemId = cart.findIndex((item) => id == item.id)
        // console.log("ITEM ID",itemId)
        cart[itemId].name= name
        console.log("REQ.BODY", req.body)
        // console.log("CART 2",cart)
        res.status(200).send(req.session.cart)
    },
    delete: (req, res) => {
        const {
            id
        } = req.params
        console.log(req.params)
        const itemId = req.session.cart.findIndex((item) => id == item.id)

        req.session.cart.splice(itemId, 1)
        res.status(200).send(req.session.cart)
    }
}