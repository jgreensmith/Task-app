import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    message: {
        type: String,
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters']
    },
    pals: {
        type: Number,
        required: true,
    },
    deadline: {
        date: {type: Date},
        time: {type: Number}
    },
    department: {
        type: String,
        enum: {
            values: ['Accounting', 'Sales', 'Customer Service', 'Reception', 'Warehouse', 'Quality Assurance'],
            message: '{VALUE} is not an department'
        }
    },
    comments: [{ body: String, date: Date }],




})