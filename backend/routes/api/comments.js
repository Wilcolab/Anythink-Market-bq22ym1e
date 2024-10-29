/**
 * Express router to handle comment-related routes.
 * @module routes/api/comments
 */

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

/**
 * Route to get all comments.
 * @name get/
 * @function
 * @memberof module:routes/api/comments
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>} - Returns a promise that resolves to void
 * @throws {Error} - Throws an error if there is an issue retrieving comments
 */
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        console.error(err); // Print the error to the log
    }
});
