const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;