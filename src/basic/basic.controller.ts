import { Router } from 'express';
import { BasicService } from './basic.service';

const router: Router = Router();
const basicService = new BasicService();

router.get('/', (req, res) => {
  res.json({
    data: basicService.getHello(),
  });
});

export default router;
