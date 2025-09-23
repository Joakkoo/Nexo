import dotenv from 'dotenv';
dotenv.config();

import http from 'http';
import app from './web/app';

const port = parseInt(process.env.PORT || '4000', 10);

const server = http.createServer(app);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API escuchando en http://localhost:${port}`);
});
