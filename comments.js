// Create web server 
// Create a new comment
// Get all comments
// Get a specific comment
// Delete a specific comment
// Update a specific comment

module.exports = (app) => {
    const comments = require('../controllers/comments.controller.js');

    // Create a new comment
    app.post('/comments', comments.create);

    // Get all comments
    app.get('/comments', comments.findAll);

    // Get a specific comment
    app.get('/comments/:commentId', comments.findOne);

    // Delete a specific comment
    app.delete('/comments/:commentId', comments.delete);

    // Update a specific comment
    app.put('/comments/:commentId', comments.update);
}