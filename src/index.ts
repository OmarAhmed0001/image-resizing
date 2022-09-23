import express from 'express';
import imageRoute from './routes/imageRoute';
const app = express();
app.listen(3000);
app.use(imageRoute);

export default app;
