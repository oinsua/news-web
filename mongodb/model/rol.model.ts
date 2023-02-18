import mongoose, { Schema, Document } from 'mongoose'

interface RolDoc extends Document {
    name: string;
    permission: string;
}

const RolSchema = new Schema<RolDoc>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    permission: {
        type: String,
        required: true,
        trim: true
    }
});

RolSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

export default mongoose.models['Rol'] || mongoose.model<RolDoc>("Rol", RolSchema);