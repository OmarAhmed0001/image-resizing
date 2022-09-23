/* eslint-disable @typescript-eslint/ban-types */
import express from 'express';
import fs from 'fs';
import path from 'path';

const check = async (
  req: express.Request,
  res: express.Response,
  next: Function
): Promise<void> => {
  try {
    const name = req.params.name;
    const width = req.params.width;
    const hieght = req.params.hieght;
    const fullName = name.split('.');
    if (!fs.existsSync('thumbnails')) {
      fs.mkdir('thumbnails', () => {
        //console.log(error);
      });
    }

    if (
      fs.existsSync(
        `thumbnails/${
          fullName[0] + '-' + width + '-' + hieght + '.' + fullName[1]
        }`
      )
    ) {
      res
        .status(300)
        .sendFile(
          path.resolve(
            `thumbnails/${
              fullName[0] + '-' + width + '-' + hieght + '.' + fullName[1]
            }`
          )
        );
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
export default check;
