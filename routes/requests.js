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
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Form' });
});
export default router;
