const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const ArticleSchema = new Schema({
    person: { type: ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, default: '1', enum: ['1', '2', '3'] },
    author: { type: ObjectId, ref: 'User', required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Article', ArticleSchema);

// tag => '1', '2', '3' => 'important', 'personal', 'misc'
// status => '1', '2', '3' => 'new', 'inprocess', 'done'