const ImageModel = require('../models/image');
const { processUpload } = require('../utils');

module.exports = {
  uploadImage: async image => {
    try {
      const storedImage = await processUpload(image);

      return await ImageModel(storedImage).save();
    } catch (error) {
      console.log(error);
    }
  },
};
