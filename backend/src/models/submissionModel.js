import mongoose, { Schema } from 'mongoose';

const SubmissionSchema = new Schema({
  description: { type: String, default: 'No Description' },
  author: { type: Schema.Types.ObjectID, ref: 'User' },
  comments: [{ type: String }],
  tag: { type: Number },
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
});

const SubmissionModel = mongoose.model('Submission', SubmissionSchema);
export default SubmissionModel;