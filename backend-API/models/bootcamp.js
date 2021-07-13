const mongoose = require('mongoose');

const bootcampschema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add a name'],
        unique: true,
        trim: true,
        maxlength: [100,'max-length is 100 words only :)']
    },
    slug: String,
    description : {
        type: String,
        required: [true, 'please add a name'],
        maxlength: [100,'max-length is 100 words only :)']
    }
});