const { Schema, Types } = require("mongoose");
const dateFormat = require('../utils/dateFormat.js');

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
            get: dateFormat
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
