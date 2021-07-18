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
    },

    wesite: {
        type: String,
        match: [
            /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'pls enter a valid URL with extension'
        ]

    },

    phone: {
        type: String,
        maxlength: [20, 'phone number cannot be excess 20 digits']
    },

    email: {
        type: String,
        match: [
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            'pls enter valid email-address'
        ]
    },

    address: {
        type: String,
        required: [true,'please add an address']
    },

    location: {
        type:{
            type: String,
            enum: ['point'],
            required: false
        },
        coordinates: {
            type: [Number],
            required: false,
            index: '2dsphere'
        },
        formatted_Address: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String
    },
    
    carrers: {
        type: [String],
        required: true,
        enum: [
            'DevOps',
            'SDE-1',
            'SDE-2',
            'SDE-3',
            'SDE-4',
            'Project Manager',
            'Tech Lead',
            'Program Manager',
            'Engineering Manager',
            'Director of Engineering',
            'Chief Technical Officer',
            'Chief Executive Officer',
            'Other'
        ]
    },

    averagerating: {
        type: Number,
        min: [0, 'rating cannot be negative'],
        max: [10, 'rating cannot exceed 10']
    },
    averagecost: Number,
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('bootcamp', bootcampschema);