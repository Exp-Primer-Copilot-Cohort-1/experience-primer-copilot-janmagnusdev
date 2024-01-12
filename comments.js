// create web server
// http://localhost:3000/comments

const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// GET http://localhost:3000/comments
router.get('/', (req, res) => {
    Comment.find()
        .then((comments) => {
            res.json(comments);
        })
        .catch((err) => {
            res.json(err);
        })
});

// POST http://localhost:3000/comments
router.post('/', (req, res) => {
    const body = req.body;
    const comment = new Comment(body);
    comment.save()
        .then((comment) => {
            res.json(comment);
        })
        .catch((err) => {
            res.json(err);
        })
});

// GET http://localhost:3000/comments/:id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Comment.findById(id)
        .then((comment) => {
            res.json(comment);
        })
        .catch((err) => {
            res.json(err);
        })
});

// DELETE http://localhost:3000/comments/:id
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Comment.findByIdAndDelete(id)
        .then((comment) => {
            res.json(comment);
        })
        .catch((err) => {
            res.json(err);
        })
});

// PUT http://localhost:3000/comments/:id
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    Comment.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((comment) => {
            res.json(comment);
        })
        .catch((err) => {
            res.json(err);
        })
});

module.exports = router;