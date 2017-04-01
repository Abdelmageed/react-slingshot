import express from 'express';

const router = express.Router();

router.get('/getIt', (req, res)=> {
  res.end('Helloa from Express');
});

export default router;