import sharp from 'sharp';
import path from 'path';

const image = async (name: string, width: string, hieght: string) => {
  try {
    const fullName = name.split('.');

    await sharp(path.resolve(`images/${name}`))
      .resize(+width, +hieght)
      .toFile(
        path.resolve(
          `thumbnails/${
            fullName[0] + '-' + width + '-' + hieght + '.' + fullName[1]
          }`
        )
      );
  } catch (error) {
    console.log(error);
  }
};

export default image;
