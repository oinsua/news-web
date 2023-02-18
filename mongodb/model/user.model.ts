import mongoose, { Schema, model, Document } from 'mongoose'
import bcrypt from 'bcrypt'

interface UserDoc extends Document {
    user: string;
    email: string;
    password: string;
    rol: [
        {
            ref: string;
            type: Schema.Types.ObjectId
        }
    ];
    encrytPassword: (password: string) => Promise<boolean>;
    comparePassword: (password: string, newpassword: string) => Promise<boolean>;
}

const UserSchema = new Schema<UserDoc>({
    user: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    rol: [
        {
            ref: "Rol",
            type: Schema.Types.ObjectId
        }
    ],
},
    {
        timestamps: true
    });

UserSchema.statics.encrytPassword = async (password: string) => {
    try {
        const res = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, res);
    } catch (error) {
        console.log(error)
    }
}

UserSchema.statics.comparePassword = async (password: string, newpassword: string) => {
    try {
        return await bcrypt.compare(password, newpassword);
    } catch (error) {
        console.log(error);
    }
}

UserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

/* const CustomerModel = model("User", UserSchema)
// type `mongoose.models.Customer` same as `CustomerModel`
const Customer = (mongoose.models.Customer as typeof CustomerModel) || CustomerModel;

export default Customer; */

export default mongoose.models['User'] || mongoose.model<UserDoc>("User", UserSchema);