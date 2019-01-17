const router = require('express').Router();

const Item = require('../../models/Item');

// get all items
router.get('/', (req, res) => {
    Item.find({})
        .sort({date: -1})
        .then(items => res.json(items));
});

// post 
router.post('/', (req, res) => {
    const item = new Item({ name: req.body.name});

    // save to db 
    item.save().then(item => res.json(items));
});

module.exports = router;