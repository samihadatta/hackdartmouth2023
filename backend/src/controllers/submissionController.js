import Submission from '../models/submissionModel';

// create submission
const createSubmission = async (req, res) => {
  try {
    const newSubmission = await Submission.create(req.body);
    res.status(200).json(newSubmission);
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete submission
const deleteSubmission = async (req, res) => {
  try {
    await Submission.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'delete success' });
  } catch (error) {
    res.status(500).json(error);
  }
};

// get all submissions
const getSubmissions = async (req, res) => {
    console.log("here")
    try {
        const allSubmissions = await Submission.find({});
        res.status(200).json(allSubmissions);
    } catch (error) {
        res.status(500).json(error);
    }
};

// get submission by tag
const getSubmissionsByTag = async (req, res) => {
  try {
    const submissionsByTag = await Submission.find({ tag: req.params.tag });
    res.status(200).json(submissionsByTag);
  } catch (error) {
    res.status(500).json(error);
  }
};

const requestController = {
  createSubmission,
  deleteSubmission,
  getSubmissions,
  getSubmissionsByTag,
};

export default requestController;