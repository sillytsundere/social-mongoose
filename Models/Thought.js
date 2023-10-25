const { Schema, Types, model } = require('mongoose');
const reactionSchema = require('./Reaction.js');
const dateFormat = require('../utils/dateFormat.js');

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
            default: Date.now(),
            get: dateFormat
        },
        //the user that created this thought
        username: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        //array of reactions to this thought
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;