import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  filename: String,
  mimetype: String,
  path: String
});

export default mongoose.model('Image', imageSchema);
