const mongoose = require('mongoose');
const { createWriteStream, mkdir } = require('fs');

const storeUpload = async ({ stream, filename, mimetype }) => {
  const _id = mongoose.Types.ObjectId();
  const path = `images/${_id}-${filename}`;
  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(`public/${path}`))
      .on('finish', () => resolve({ _id, path, filename, mimetype }))
      .on('error', reject)
  );
};

exports.processUpload = async upload => {
  const { createReadStream, filename, mimetype } = await upload;
  const stream = createReadStream();
  const file = await storeUpload({ stream, filename, mimetype });
  return file;
};
