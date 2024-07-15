import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import requestRoutes from './routes/requests.js';
const app = express();
app.use(express.static(`${process.cwd()}/public`));
app.set('view engine', 'hbs');
app.set('views', path.join(process.cwd(), 'views'));
app.engine(
  'hbs',
  engine({
    extname: 'hbs',
    defaultView: 'main',
    layoutsDir: path.join(process.cwd(), 'views/layouts'),
    partialsDir: path.join(process.cwd(), 'views/partials'),
  }),
);
app.use('/', requestRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
