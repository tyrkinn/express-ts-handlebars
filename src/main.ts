import app from './app';
import logger from './logger';

const PORT = process.env.PORT ?? 3000;
try {
  app.listen(PORT, () => {
    logger.info(`Server started at http://localhost:${PORT}`);
  });
} catch (e: unknown) {
  logger.error((e as Error).message);
}
