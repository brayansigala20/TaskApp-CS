import mongoose from 'mongoose'

const ReportSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: true
    },
    description: {
        type: String,
        trim: true,
        require: true
    },
    state: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        require: true,
        default: Date.now()
    },
    priority: {
        type: String,
        enum: ["baja", "media", "alta"],
        require: true,
    },
    proyect: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Proyecto"
    }
},
    {
        timestamps: true
    })

    const Report = mongoose.model('Report', ReportSchema)
    export default Report