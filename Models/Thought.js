const { Schema, Types, model } = require('mongoose');
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
            default: Date.now(),
            //use a getter method to format the timestamp on query
            //default: function() {write date format function in here},
            //use a virtual to make the format time function
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
thoughtSchema.virtual('formatTime').get(function() {
    
})
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;