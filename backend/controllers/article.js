const Article = require("../models/Article");
const { success, error } = require('../utils/responses');

const Constants = require('../utils/constants');

exports.getAll = (req, res, next) => {
    Article
        .find()
        .then(docs => success(res, docs, docs.length + Constants.RecordsFound))
        .catch(err => error(res, err, Constants.ErrorFinding));
}

exports.getByPerson = (req, res, next) => {
    Article
        .find({ person: req.params.id })
        .then(docs => success(res, docs, docs.length + Constants.RecordsFound))
        .catch(err => error(res, err, Constants.ErrorFinding));
}

exports.getByAuthor = (req, res, next) => {
    Article
        .find({ author: req.params.id })
        .then(docs => success(res, docs, docs.length + Constants.RecordsFound))
        .catch(err => error(res, err, Constants.ErrorFinding));
}

exports.create = async (req, res, next) => {
    const { person, title, message, image, category, author } = req.body;
    const article = new Article({
        person, title, message, image, category, author
    });
    article
        .save()
        .then(doc => success(res, doc._id, Constants.RecordsCreated))
        .catch(err => error(res, err, Constants.ErrorCreating));
}

exports.update = async (req, res, next) => {
    const { _id: id, person, title, message, image, category } = req.body;
    Article
        .findByIdAndUpdate(id, { person, title, message, image, category }, { upsert: true })
        .then(doc => success(res, doc, Constants.RecordsUpdated))
        .catch(err => error(res, err, Constants.ErrorUpdating));
}

exports.delete = async (req, res, next) => {
    const { id } = req.params;
    Article
        .findByIdAndRemove(id)
        .then(doc => success(res, doc, Constants.RecordsRemoved))
        .catch(err => error(res, err, Constants.ErrorRemoving));
}