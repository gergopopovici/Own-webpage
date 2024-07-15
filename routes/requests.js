import express from 'express';

const app = express();
const router = express.Router();
app.use(express.json());
router.get('/', (req, res) => {
  res.render('index', { title: 'Hello' });
});
export default router;
