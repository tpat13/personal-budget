const mongoose = require ("mongoose");


const budgetSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    }, 
    title: {
        type: String,
        required: true,
        unique: true,
    }, 
    value: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        trim: true,
        required: true,
        uppercase: true
    }
}, { collection: 'pb_collection'});

module.exports = mongoose.model('pb_collection', budgetSchema)