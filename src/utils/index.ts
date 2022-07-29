import mongoose from 'mongoose';
import { createWriteStream } from 'fs';
import { finished } from 'stream/promises';
import { join } from 'path';

const handleUpload = async (upload: any) => {
  const { createReadStream, filename, mimetype, encoding } = await upload;
  const _id = new mongoose.Types.ObjectId();
  const path = `images/${_id}-${filename}`;

  console.log('createReadStream');
  const stream = createReadStream();
  console.log('createWriteStream');
  const out = createWriteStream(join(__dirname, `../../public/${path}`));

  await stream.pipe(out);
  await finished(out);

  return { _id, path, filename, mimetype, encoding };
};

export { handleUpload };
