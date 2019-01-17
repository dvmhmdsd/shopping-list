const router = require('express').Router();

const Item = require('../../models/Item');

// get all items
router.get('/', (req, res) => {
    Item.find({}).sort({date: -1}).then(items => res.json(items));
});

module.exports = router;