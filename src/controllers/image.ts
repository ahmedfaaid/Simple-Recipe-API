import ImageModel from '../models/image';
import { handleUpload } from '../utils';

const imageController = {
  uploadImage: async (image: any) => {
    try {
      const storedImage = await handleUpload(image);

      const newImage = new ImageModel(storedImage);
      await newImage.save();

      return newImage;
    } catch (error) {
      console.log(error);
      return;
    }
  }
};

export default imageController;
