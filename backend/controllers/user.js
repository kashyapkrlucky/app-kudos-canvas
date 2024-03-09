// Required Imports
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const User = require('../models/User');
const { success, error, unauthorize, duplicate } = require('../utils/responses');

const Constants = require('../utils/constants');

exports.signUp = async (req, res, next) => {
    const { email, password, ...others } = req.body;
    const empExists = await User.findOne({ email }).select({ _id: true });
    if (email && password && empExists === null) {
        const salt = await bcryptjs.genSalt(10);
        const hashedPass = await bcryptjs.hash(password, salt);
        const user = new User({
            ...others, email, password: hashedPass
        });
        user
            .save()
            .then(doc => success(res, doc._id, Constants.RecordsCreated))
            .catch(err => error(res, err, Constants.ErrorCreating));
    } else {
        duplicate(res, "", Constants.EmailRegistered);
    }
}

// Exported Controller to get user signed in
exports.signIn = async (req, res, next) => {
    const { email, password } = req.body;
    // if email exists
    const [isExist] = await User.find({ email });
    if (isExist && password) {
        // Validate Password
        const verifyPassword = await bcryptjs.compareSync(password, isExist.password);
        if (verifyPassword) {
            // Generate and Send Token
            let signOptions = { issuer: Constants.AppName, expiresIn: "23h" };
            const authToken = jwt.sign({
                _id: isExist._id,
                firstName: isExist.firstName,
                lastName: isExist.lastName,
                email: isExist.email,
                avatar: isExist.avatar,
                type: 'User'
            }, process.env.SECRET, signOptions);
            success(res, authToken, Constants.Authenticated);
        } else {
            unauthorize(res, "", Constants.InvalidEmailPassword);
        }
    } else {
        unauthorize(res, "", Constants.InvalidEmailPassword);
    }
};

exports.list = (req, res, next) => {
    User
        .find({})
        .sort({ createdAt: 'desc' })
        .select({ password: 0, __v: 0 })
        .then(docs => success(res, docs, Constants.RecordsFound))
        .catch(err => error(res, err, Constants.ErrorFinding));
}

exports.profile = (req, res, next) => {
    User
        .findById(req.params.id)
        .select({ password: 0, __v: 0 })
        .then(doc => success(res, doc, Constants.RecordsFound))
        .catch(err => error(res, err, Constants.ErrorFinding));
}

exports.update = (req, res, next) => {
    const { id, ...others } = req.body;
    User
        .findByIdAndUpdate(id, others, { upsert: true })
        .then(doc => success(res, '', Constants.RecordsUpdated))
        .catch(err => error(res, err, Constants.ErrorUpdating));
};

exports.changePassword = async (req, res, next) => {
    const { currentPassword, newPassword } = req.body;
    const { id } = req.params;
    const emp = await User.findById(id).select({ _id: true, password: true });
    if (emp) {
        const verifyPassword = await bcryptjs.compareSync(currentPassword, emp.password);
        if (verifyPassword) {
            const salt = await bcryptjs.genSalt(10);
            const hashedPass = await bcryptjs.hash(newPassword, salt);
            User
                .findByIdAndUpdate(id, { password: hashedPass }, { upsert: true })
                .then(doc => success(res, doc._id, Constants.RecordsUpdated))
                .catch(err => error(res, err, Constants.ErrorUpdating));
        } else {
            error(res, "", Constants.CurrentPasswordWrong);
        }
    } else {
        error(res, "", Constants.InvalidEmailPassword);
    }
};

// Search User 
exports.search = (req, res, next) => {
    const { str } = req.params;
    User
        .find({ firstName: new RegExp(str, 'i') })
        .select({ password: 0, __v: 0 })
        .then(docs => success(res, docs, Constants.RecordsFound))
        .catch(err => error(res, err, Constants.ErrorFinding));
}