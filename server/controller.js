let items = []


module.exports = {
    getItems: (req, res) => {
        res.status(200).send(req.session.cart || [])
    },
    getOneItem: (req, res) => {

        res.status(200).send(oneItem)
    },
    addOrder: async (req, res) => {
        if (req.session.cart) {
            let db = req.app.get('db')
            let newOrder = req.body.map((item) => {
                let formatted = {
                    product_id: item.id,
                    user_id: req.session.user.id,
                    price: item.price,
                    product_quantity: item.quantity
                    
                }
                return formatted
                
            }
            )
            let inserted = await db.orders.insert(newOrder, function(err){
                
            })
            res.status(200).send(inserted)
            // let myOrder = await db.create_order([id, req.session.id, price, product_quantity])
        }
    },
    getOrders: async (req, res) => {
        let db = req.app.get('db')
        let orders = await db.order_list(req.session.user.id)
        if (req.session.user) {
            res.status(200).send(orders)
        } else {
            res.status(401).send('Please log in')
        }
    },
    create: (req, res) => {
        if (!req.session.cart) {
            req.session.cart = []
        }
        const {
            name,
            price,
            imageAddress,
            id
        } = req.body
        let newItem = {
            name: name,
            imageAddress: imageAddress,
            price: price,
            id: id,
            quantity: 1
        }
        req.session.cart.push(newItem)
        res.status(200).send(req.session.cart)
    },
    add: (req, res) => {
        const {
            cart
        } = req.session
        const {
            id
        } = req.params
        const itemId = cart.findIndex((item) => id == item.id)
        cart[itemId].quantity += 1
        res.status(200).send(cart)
    },
    sub: (req, res) => {
        const {
            cart
        } = req.session
        const {
            id
        } = req.params
        const itemId = cart.findIndex((item) => id == item.id)
        cart[itemId].quantity -= 1
        res.status(200).send(cart)
    },

    edit: (req, res) => {
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
        cart[itemId].name = name
        res.status(200).send(req.session.cart)
    },
    delete: (req, res) => {
        const {
            id
        } = req.params
        const itemId = req.session.cart.findIndex((item) => id == item.id)

        req.session.cart.splice(itemId, 1)
        res.status(200).send(req.session.cart)
    }
}