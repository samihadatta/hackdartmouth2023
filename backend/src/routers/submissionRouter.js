import { Router } from 'express';
import submissionController from '../controllers/submissionController';

const router = Router();

// get all submissions
router.route('submission/')
  .get(submissionController.getSubmissions);

// create submission
router.route('addSubmission/')
  .post(submissionController.createSubmission);

// delete for specific submission
router.route('deleteSubmission/:id')
  .delete(submissionController.deleteSubmission);

// get submission by tag
router.route('submission/:tag')
    .get(submissionController.getSubmissionsByTag);

export default router;