/* eslint-disable @typescript-eslint/ban-types */
import express from 'express';
import fs from 'fs';

const valide = async (
  req: express.Request,
  res: express.Response,
  next: Function
): Promise<void> => {
  try {
    const name = req.params.name;
    const width = req.params.width;
    const hieght = req.params.hieght;

    if (!fs.existsSync(`images/${name}`) || !name) {
      res.status(400).send('name does not exist');
    } else if (isNaN(+width) || !width) {
      res.status(400).send('width not valid');
    } else if (isNaN(+hieght) || !hieght) {
      res.status(400).send('hieght not valid');
    } else if (+hieght <= 0 || +width < 0) {
      res.status(400).send('not valid dimensions !! ');
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};
export default valide;
