import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

if(!uri) {
    throw new Error('Add mongodb connection string to .env.local')
}

const client = new MongoClient(uri, options)
const clientPromise = client.connect();

export default clientPromise;