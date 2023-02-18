import mongoose, { Schema, Document } from 'mongoose'
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

UserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

export default mongoose.models['User'] || mongoose.model<UserDoc>("User", UserSchema);