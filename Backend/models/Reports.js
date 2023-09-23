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
    source: {
        type: String,
        require:true
    },
    serie:{
        type: String,
        require:false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
    }
},
    {
        timestamps: true
    })

const Reports = mongoose.model('Reports', ReportSchema)
export default Reports