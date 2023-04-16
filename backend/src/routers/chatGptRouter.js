import { Router } from 'express';
import { chatGptController } from '../controllers';

const router = Router();

router.route('/').post(chatGptController.askChatGPT);

export default router;
