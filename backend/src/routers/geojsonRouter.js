import { Router } from 'express';
import submissionController from '../controllers/submissionController';

const router = Router();

// get geojson
router.route('/')
    .get(submissionController.getGeoJSON);

export default router;