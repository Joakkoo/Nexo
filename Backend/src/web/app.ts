import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes, { mountRoutes } from './routes';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));

app.get('/health', (_req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() });
});

app.use('/', routes);
mountRoutes(app);

export default app;
