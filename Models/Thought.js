const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction.js');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,

        },
        username: { //the user that created this thought
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    }
)

module.exports = Thought;