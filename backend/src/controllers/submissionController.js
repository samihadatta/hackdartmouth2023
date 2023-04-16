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
    console.log("delete")
    try {
        await Submission.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'delete success' });
    } catch (error) {
        res.status(500).json(error);
    }
};

// get all submissions
const getSubmissions = async (req, res) => {
    try {
        const allSubmissions = await Submission.find({});
        res.status(200).json(allSubmissions);
    } catch (error) {
        res.status(500).json(error);
    }
};

// get submission by id
const getSubmissionById = async (req, res) => {
    try {
        const submission = await Submission.find({_id: req.params.id});
        res.status(200).json(submission);
    } catch (error) {
        res.status(500).json(error);
    }
};

// get submission by tag
const getSubmissionsByTag = async (req, res) => {
    console.log('get by tag')
    try {
        const submissionsByTag = await Submission.find({ tag: req.params.tag });
        res.status(200).json(submissionsByTag);
    } catch (error) {
        res.status(500).json(error);
    }
};

// create json file from submissions
const getGeoJSON = async (req, res) => {
    console.log('here')
    try{
        const allSubmissions = await Submission.find({});
        var geoJSON = {
            "type": "FeatureCollection",
            "features": [
                {
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -76.9750541388,
                            38.8410857803
                        ]
                    },
                    "type": "Feature",
                    "properties": {
                        "description": "Southern Ave",
                        "marker-symbol": "rail-metro",
                        "title": "Southern Ave",
                        "url": "http://www.wmata.com/rider_tools/pids/showpid.cfm?station_id=107",
                        "lines": [
                            "Green"
                        ],
                        "address": "1411 Southern Avenue, Temple Hills, MD 20748"
                    }
                }
            ]
        }
        allSubmissions.forEach(element => geoJSON.features.push({
            "geometry": {
                "type": "Point",
                "coordinates": [
                    element.lng,
                    element.lat
                ]
            },
            "type": "Feature",
            "properties": {
                "description": element.description,
                "tag": element.tag
            }
        }));

        res.status(200).json(geoJSON);
    } catch (error) {
        res.status(500).json(error);
    }
}

const requestController = {
  createSubmission,
  deleteSubmission,
  getSubmissions,
  getSubmissionById,
  getSubmissionsByTag,
  getGeoJSON,
};

export default requestController;