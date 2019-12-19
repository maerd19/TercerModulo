const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const Survey = require("../models/survey");
const { errorHandler } = require("../helpers/dbErrorHandler");

// required survey will be stored in req
exports.surveyById = (req, res, next, id) => {
    Survey.findById(id).exec((err, survey) => {
        if (err || !survey) {
            return res.status(404).json({
                error: "No se encontro la encuesta"
            });
        }
        req.survey = survey;
        console.log(`se agrego survey a req: ${req}`)
        next();
    });
};

// Create a new survey
exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {        
        // if (err) {
        //     return res.status(400).json({
        //         error: "No se pudo cargar la imagen"
        //     });
        // }

        const { name, description } = fields;
        console.log(req.body);
        console.log(`que pedo foggy, ${name}, ${description}`);

        if ( !name || !description ) {
            return res.status(400).json({
                error: "Todos los campos son requeridos"
            });
        }

        // Se agrega el usuario a fields        
        fields.user = req.profile._id;

        let survey = new Survey(fields);

        // 1kb = 1000
        // 1mb = 1000000
        
        // Validation for image upload
        // if (files.photo) {
        //     // console.log("FILES PHOTO: ", files.photo);
        //     if (files.photo.size > 1000000) {
        //         return res.status(400).json({
        //             error: "La imagen debe pesar menos de 1 MB"
        //         });
        //     }
        //     survey.photo.data = fs.readFileSync(files.photo.path);
        //     survey.photo.contentType = files.photo.type;
        // }
        
        survey.save((err, result) => {
            console.log();
            
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.status(201).json(result);
        });
    });
};

// Get a single survey
exports.read = (req, res) => {
    // photo will not be sent because it may have a big size that can cause performance issues
    req.survey.photo = undefined;
    return res.status(200).json(req.survey);
};

// Update a survey
exports.update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "No se pudo cargar la imagen"
            });
        }
        // check for all fields
        const { name, description, user } = fields;

        if ( !name || !description || !user ) {
            return res.status(400).json({
                error: "Todos los campos son requeridos"
            });
        }

        let survey = req.survey;
        // use of lodash extends method
        survey = _.extend(survey, fields);

        // 1kb = 1000
        // 1mb = 1000000

        if (files.photo) {
            // console.log("FILES PHOTO: ", files.photo);
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "La imagen debe pesar menos de 1 MB"
                });
            }
            survey.photo.data = fs.readFileSync(files.photo.path);
            survey.photo.contentType = files.photo.type;
        }

        survey.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.status(202).json(result);
        });
    });
};

// Delete a survey
exports.remove = (req, res) => {
    let survey = req.survey;
    survey.remove((err) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.status(204).json({
            message: `Encuesta borrada exitosamente`
        });
    });
};

// Display most popular products
/**
 * sell / arrival
 * by sell = /products?sortBy=sold&order=desc&limit=4
 * by arrival = /products?sortBy=createdAt&order=desc&limit=4
 * if no params are sent, then all products are returned
 */

exports.list = (req, res) => {
    // if we get order from req query we use it otherwise we use ascending by default
    let order = req.query.order ? req.query.order : "asc";
    // if we get sortBy from req query we use it otherwise we use _id by default
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    // if we get limit from req query we use it otherwise we use 6 by default
    // It's necessary to parse limit because it's sent as string
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;

    Survey.find()
        // When returning all surveys we dont want to send the photo altogether.
        // It's going to be very slow
        .select("-photo")
        // Since user in survey is an ObjectId type, populate will display the user name instead of the Id
        .populate("user")
        // sort order
        .sort([[sortBy, order]])
        .limit(limit)
        .exec((err, surveys) => {
            if (err) {
                return res.status(400).json({
                    error: "Surveys not found"
                });user
            }
            res.status(200).json(surveys);
        });
};

/**
 * list products by search
 * we will implement product search in react frontend
 * we will show categories in checkbox 5de40cf798b5b00226831e9fand price range in radio buttons
 * as the user clicks on those checkbox and radio buttons
 * we will make api request and show the products to users based on what he wants
 */
exports.listBySearch = (req, res) => {
    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    // findArgs will contain the category id's & the price range
    // The object will populate based on what we ge in the request body
    let findArgs = {};

    // console.log(order, sortBy, limit, skip, req.body.filters);
    // console.log("findArgs", findArgs);

    for (let key in req.body.filters) {
        if (req.body.filters[key].length > 0) {
            findArgs[key] = req.body.filters[key];
        }
    }

    Survey.find(findArgs)
        // select all but the photo
        .select("-photo")
        .populate("user")
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(limit)
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "No se encontro la encuesta"
                });
            }
            res.status(200).json({
                size: data.length,
                data
            });
        });
};

// With this we can view any product photo
exports.photo = (req, res, next) => {
    // IF we have the product in the request then we can send it
    if (req.product.photo.data) {
        res.set("Content-Type", req.product.photo.contentType);
        return res.send(req.product.photo.data);
    }
    next();
};