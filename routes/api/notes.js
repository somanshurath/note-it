const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Note = require('../../models/Note.js');

// @route   POST api/notes
// @desc    Create a note
// @access  Private
router.post(
    '/',
    [
        auth,
        [
            check('title', 'Title is required').not().isEmpty(),
            check('note', 'Note is required').not().isEmpty(),
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });

        const { title, note, category, color } = req.body;
        noteFields = {};
        noteFields.user = req.user.id;
        noteFields.title = title;
        noteFields.note = note;
        noteFields.date = Date.now();
        noteFields.notesize = note.length;
        if (category !== '') {
            noteFields.category = category.split(',').map((cat) => cat.trim());
        }
        if (color !== '') noteFields.color = color;

        try {
            const note = new Note(noteFields);
            await note.save();
            res.json(note);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

router.post(
    '/:id',
    [
        auth,
        [
            check('title', 'Title is required').not().isEmpty(),
            check('note', 'Note is required').not().isEmpty(),
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });

        const { title, note, category, color } = req.body;
        noteFields = {};
        noteFields.user = req.user.id;
        noteFields.title = title;
        noteFields.note = note;
        noteFields.date = Date.now();
        noteFields.notesize = note.length;
        if (category !== '') {
            noteFields.category = category.split(',').map((cat) => cat.trim());
        }
        if (color !== '') noteFields.color = color;

        try {
            const note = await Note.findByIdAndUpdate(
                req.params.id,
                { $set: noteFields },
                { new: true }
            );
            await note.save();
            res.json(note);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route   GET api/notes/:id
// @desc    Get note by ID
// @access  Private
router.get('/:id', auth, async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ msg: 'Note not found' });
        res.json(note);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId')
            return res.status(404).json({ msg: 'Note not found' });
        res.status(500).send('Server Error');
    }
});

// @route   GET api/notes
// @desc    Get all notes
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id }).sort({
            notesize: -1,
        });
        res.json(notes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/notes/:id
// @desc    Delete note by ID
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        const note = await Note.find({ user: req.user.id, _id: req.params.id });
        if (!note) return res.status(404).json({ msg: 'Note not found' });
        await Note.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Note removed' });
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId')
            return res.status(404).json({ msg: 'Note not found' });
        res.status(500).send('Server Error');
    }
});

module.exports = router;
