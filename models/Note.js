const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    title: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: 'White',
    },
    category: {
        type: Array,
        default: [],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    notesize: {
        type: Number,
        default: 0,
    }
});

module.exports = Note = mongoose.model('note', NoteSchema);
