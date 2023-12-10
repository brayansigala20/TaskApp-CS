import mongosse from 'mongoose';
import bcrypt from 'bcrypt'

const UserSchema = mongosse.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    token: {
        type: String
    },
    confirm: {
        type: Boolean,
        default: false
    }
}
    , {
        timestamps: true,
    })

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})
UserSchema.methods.comparePassword = async function (passwordForm) {
    return await bcrypt.compare(passwordForm, this.password)
}

const Users = mongosse.model('Users', UserSchema)
export default Users