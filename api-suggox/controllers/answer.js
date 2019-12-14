const formidable = require("formidable");
const _ = require("lodash");
const Answer = require("../models/answer");
const { errorHandler } = require("../helpers/dbErrorHandler");

// required answer will be stored in req
exports.answerById = (req, res, next, id) => {
    Answer.findById(id).exec((err, answer) => {
        if (err || !answer) {
            return res.status(400).json({
                error: "La respuesta no existe"
            });
        }
        req.answer = answer;
        next();
    });
};

// Create a new answer
exports.create = (req, res) => {
    // formidable will help to handle from requests
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {

        const { simple_answer, long_answer, user, survey } = fields;

        // all fields should be filled
        if ( !simple_answer, !long_answer, !user, !survey ) {
            return res.status(400).json({
                error: "Todos los campos son requeridos"
            });
        }

        let answer = new Answer(fields);

        // new answer is created in DB
        answer.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.status(201).json(result);
        });

    });
};

// Send answer received as parameter in URI
exports.read = (req, res) => {
    return res.json(req.answer);
};

// Update an answer
exports.update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {

        // check for all fields
        const { simple_answer, long_answer, user, survey } = fields;

        if ( !simple_answer, !long_answer, !user, !survey ) {
            return res.status(400).json({
                error: "Todos los campos son requeridos"
            });
        }

        let answer = req.answer;
        // use of lodash extends method
        answer = _.extend(answer, fields);

        answer.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.status(202).json(result);
        });

    });
    // const answer = req.answer;
    // // Answer has only a field
    // answer.name = req.body.name;
    // answer.save((err, data) => {
    //     if (err) {
    //         return res.status(400).json({
    //             error: errorHandler(err)
    //         });
    //     }
    //     res.status(202).json(data);
    // });
};

// Delete an answer
exports.remove = (req, res) => {
    const answer = req.answer;
    answer.remove((err) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.status(202).json({
            message: "Respuesta Borrada exitosamente"
        });
    });
};

// View all answers
exports.list = (req, res) => {
    Answer.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.status(200).json(data);
    });
};