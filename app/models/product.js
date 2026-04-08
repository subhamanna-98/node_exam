

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const variantSchema = new Schema({
    size: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: true
    }
}, { _id: false })

const imageSchema = new Schema({
    url: {
        type: String,
        required: true
    }
}, { _id: false })

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    description: {
        type: String
    },
    shortDescription: {
        type: String
    },

    brand: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true
    },

    price: {
        type: Number,
        required: true
    },
    discountPrice: {
        type: Number
    },
    currency: {
        type: String,
        default: 'USD'
    },

    variants: [variantSchema],

    images: [imageSchema],

    tags: [{
        type: String,
        trim: true
    }],

    status: {
        type: String,
        enum: ['draft', 'active', 'archived'],
        default: 'draft'
    },

    isDeleted: {
        type: Boolean,
        default: false
    },

    ratings: {
        average: {
            type: Number,
            default: 0
        },
        count: {
            type: Number,
            default: 0
        }
    }

}, {
    timestamps: true 
})

const productModule = mongoose.model('product',productSchema)
module.exports = productModule