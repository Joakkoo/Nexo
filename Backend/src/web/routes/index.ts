import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({ name: 'Nexo API', version: '1.0.0' });
});

export default router;

export const mountRoutes = (app: import('express').Express) => {
  app.use('/api', router);
  app.use('/api/auth', require('../routes/auth').default);
};
