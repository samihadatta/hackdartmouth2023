import { Router } from 'express';
import submissionController from '../controllers/submissionController';

const router = Router();

// get all submissions
router.route('/')
  .get(submissionController.getSubmissions)
  .post(submissionController.createSubmission);

// delete for specific submission
router.route('/:id')
  .delete(submissionController.deleteSubmission);

// get submission by tag
router.route('/:tag')
    .get(submissionController.getSubmissionsByTag);

export default router;