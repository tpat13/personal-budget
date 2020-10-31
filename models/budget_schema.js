const mongoose = require ("mongoose");


const budgetSchema = new mongoose.Schema({
    
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
    }
}, { collection: 'pb_collection'});

module.exports = mongoose.model('pb_collection', budgetSchema)