import { Router } from 'express';

import health from './health';
import my from './my';
import subscriptions from './subscriptions';

const router = Router();

router.get('/metrics/health', health);
router.get('/my', my);
router.use('/subscriptions', subscriptions);

router.use((error, req, res, next) => {
  res.status(500).json({
    error: error.message,
  });
});

export default router;
