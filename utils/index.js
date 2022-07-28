const mongoose = require('mongoose');
const { createWriteStream, mkdir } = require('fs');
const { finished } = require('stream/promises');
const { join } = require('path');

exports.handleUpload = async upload => {
  const { createReadStream, filename, mimetype, encoding } = await upload;
  const _id = mongoose.Types.ObjectId();
  const path = `images/${_id}-${filename}`;

  console.log('createReadStream');
  const stream = createReadStream();
  console.log('createWriteStream');
  const out = await createWriteStream(join(__dirname, `../public/${path}`));

  await stream.pipe(out);
  await finished(out);

  return { _id, path, filename, mimetype, encoding };
};
