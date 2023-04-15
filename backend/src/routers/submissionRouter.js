import { Router } from 'express';
import submissionController from '../controllers/submissionController';
import requestController from '../controllers/submissionController';

const router = Router();

// get all submissions and create a new submission
router.route('/')
  .get(submissionController.getSubmissions)
  .post(submissionController.createSubmission);

// delete for specific submission
router.route('delete/:id')
  .delete(requestController.deleteSubmission);

// get submission by tag
router.route('/:tag')
    .get(requestController.getSubmissionsByTag);

export default router;