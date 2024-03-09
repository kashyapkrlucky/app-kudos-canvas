const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, index: true },
    avatar: { type: String },
    password: { type: String, required: true },
    dob: { type: Date }
}, {
    timestamps: true
});

UserSchema.index({ name: "text" });

module.exports = mongoose.model('User', UserSchema);