import express from 'express';

const app = express();
const router = express.Router();
app.use(express.json());
router.get(['/', '/index'], (req, res) => {
  res.render('index', { title: 'Index' });
});
router.get('/about', (req, res) => {
  res.render('aboutme', { title: 'About' });
});
export default router;
