const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    source: {
        type: String,
    },
    userId: {
        type: String,
    },
});

const Friend = mongoose.model('Friend', friendSchema);

module.exports = Friend;