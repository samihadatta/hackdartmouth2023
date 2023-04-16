import mongoose, { Schema } from 'mongoose';

const SubmissionSchema = new Schema({
  description: { type: String, default: 'No Description' },
  comments: [{ type: String }],
  tag: { type: String },
  lng: { type: Number},
  lat: { type: Number},
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
});

const SubmissionModel = mongoose.model('Submission', SubmissionSchema);
export default SubmissionModel;