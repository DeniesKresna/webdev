import mongoose from 'mongoose'

const hobbySchema = new mongoose.Schema({
    name: String
})

export default mongoose.model('Hobby', hobbySchema)