const mongoose = require('mongoose');

const User = mongoose.model('User', { 
    discordId: {
        type: String,
        unique: true,
        required: true
    },
    rank: {
        type: String,
        required: false
    },
    merits: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = User