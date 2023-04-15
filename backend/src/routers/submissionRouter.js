import { Router } from 'express';
import submissionController from '../controllers/submissionController';

const router = Router();

// get all submissions
router.route('/')
    .get(submissionController.getSubmissions)
    .post(submissionController.createSubmission);

// delete for specific submission
router.route('/:id')
    .get(submissionController.getSubmissionById)
    .delete(submissionController.deleteSubmission);

// get submission by tag
router.route('/tag/:tag')
    .get(submissionController.getSubmissionsByTag);

export default router;