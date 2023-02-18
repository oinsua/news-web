import mongoose from 'mongoose'

// getting the connection uri
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017'

// checking if MONGO_URI is defined
if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGO_URI environment variable inside .env.local'
    )
}

mongoose.set('strictQuery', true); // save all file that are in schema

// maintaining a cached connection to prevent reconnection (connections growing exponentially during API Route usage)
let cached = (global as any).mongoose
// restiing the connection if there was no cached connection
if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null }
}
/**
 * mongodb connection
 */
export default async function connect() {

    // returning the cached connection if it exists
    if (cached.conn) {
        return cached.conn
    }

    cached.conn = await mongoose.connect(MONGODB_URI)
    return cached.conn
}