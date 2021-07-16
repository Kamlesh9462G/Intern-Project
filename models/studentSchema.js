const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
    },
    contact: {
        type: String,
    },
    subjects: [String],
    class: {
        type: String,
            required: true
    },
    societies = [String],
    year: {
        type: Number,
    }
})

module.exports = studentSchema;