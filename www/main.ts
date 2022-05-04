import app from '~/config/express';
import logger from '~/config/logger';
import { homeRoutes } from '~/routes';

const PORT = process.env.PORT ?? 3000;
app.use('/', homeRoutes);
app.on('error', logger.error);
app.listen(PORT, () => {
  logger.info(`Server started at http://localhost:${PORT}`);
});
