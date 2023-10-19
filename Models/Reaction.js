const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Types.ObjectId,
            // default: //set to a new objectID
            // newobjectid,
        },
        reactionBody: {
            type: String,
            required: true, 
            maxlength: 280,
        },
        username: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            //use a getter method to format the timestamp on query
            //default: function() {write date format function in here},
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;
