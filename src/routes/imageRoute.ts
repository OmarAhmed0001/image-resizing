import express from 'express';
import fs from 'fs';
import path from 'path';
import check from '../middlewares/check';
import valid from '../middlewares/valide';
import image from '../middlewares/imageResize';
const router = express.Router();
router.get(
  '/resize/:name/:width/:hieght',
  valid,
  check,
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      const name = req.params.name;
      const width = req.params.width;
      const hieght = req.params.hieght;
      if (!fs.existsSync('thumbnails')) {
        fs.mkdir('thumbnails', (error) => {
          console.log(error);
        });
      }
      const fullName = name.split('.');

      await image(name, width, hieght);
      res.sendFile(
        path.resolve(
          `thumbnails/${
            fullName[0] + '-' + width + '-' + hieght + '.' + fullName[1]
          }`
        )
      );
    } catch (error) {
      console.log(error);
    }
  }
);
router.get(
  '/show/:name',
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      const name = req.params.name;

      res.sendFile(path.resolve(`images/${name}`));
    } catch (error) {
      console.log(error);
    }
  }
);

export default router;
